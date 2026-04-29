/************************************************************
	학적과 수강신청 실습 데이터 베이스
*************************************************************/
-- 데이터 베이스 생성
CREATE DATABASE IF NOT EXISTS `enroll2026`;
SHOW DATABASES;
USE ENROLL2026;

SHOW TABLES;

CREATE TABLE SUBJECT(
	SUBJECT_NO		INT			PRIMARY KEY,
    SUBJECT_NAME	VARCHAR(10),
    CLASS_ROOM		VARCHAR(10),
    INSTRUCTOR_NO	INT
);

CREATE TABLE INSTRUCTOR(
	INSTRUCTOR_NO	INT				PRIMARY KEY,
    INSTRUCTOR_NAME	VARCHAR(10),
    AGE				INT,
    GENDER			CHAR(1)
);

CREATE TABLE STUDENT(
	STUDENT_ID			INT 		 	PRIMARY KEY,
    STUDENT_NAME		VARCHAR(10)		NOT NULL,
    ADDRESS				VARCHAR(20)
);

CREATE TABLE ENROLLMENT (
	STUDENT_ID		INT,
    SUBJECT_NO		INT,
    GRADE			CHAR(2),
    
    CONSTRAINT FK_ENROLLMENT_STUDENT_ID 
		FOREIGN KEY (STUDENT_ID) REFERENCES STUDENT(STUDENT_ID),
    CONSTRAINT FK_ENROLLMENT_SUBJECT_NO 
		FOREIGN KEY (SUBJECT_NO) REFERENCES SUBJECT(SUBJECT_NO)
);

CREATE TABLE CLASS_TIME (
	TIME_ID			INT 		PRIMARY KEY,
    SUBJECT_NO		INT,
    CLASS_TIME		VARCHAR(10),
    
    CONSTRAINT FK_CLASS_TIME_SUBJECT_NO
		FOREIGN KEY (SUBJECT_NO) REFERENCES SUBJECT(SUBJECT_NO)
);


ALTER TABLE SUBJECT
	ADD CONSTRAINT FK_SUBJECT_INSTRUCTOR_NO
		FOREIGN KEY (INSTRUCTOR_NO) REFERENCES INSTRUCTOR(INSTRUCTOR_NO);

INSERT INTO INSTRUCTOR (INSTRUCTOR_NO, INSTRUCTOR_NAME, AGE, GENDER) 
VALUES
	(101, '김철수', 35, 'M'),
	(102, '이영희', 42, 'F'),
	(103, '박지성', 29, 'M'),
	(104, '최유리', 38, 'F'),
	(105, '정민호', 45, 'M');

INSERT INTO STUDENT (STUDENT_ID, STUDENT_NAME, ADDRESS) 
VALUES
	(2026001, '강하늘', '서울시 강남구'),
	(2026002, '이바다', '부산시 해운대구'),
	(2026003, '정산호', '대구시 수성구'),
	(2026004, '박구름', '인천시 연수구'),
	(2026005, '최태양', '광주시 남구');

INSERT INTO SUBJECT (SUBJECT_NO, SUBJECT_NAME, CLASS_ROOM, INSTRUCTOR_NO) 
VALUES
	(1, '데이터베이스', 'A-101', 101),
	(2, '자바프로그래밍', 'B-202', 102),
	(3, '파이썬기초', 'C-303', 103),
	(4, '네트워크보안', 'D-404', 104),
	(5, '인공지능개론', 'E-505', 105);

INSERT INTO CLASS_TIME (TIME_ID, SUBJECT_NO, CLASS_TIME) 
VALUES
	(1001, 1, '월 09:00'),
	(1002, 2, '화 13:00'),
	(1003, 3, '수 10:00'),
	(1004, 4, '목 15:00'),
	(1005, 5, '금 11:00');
    
INSERT INTO ENROLLMENT (STUDENT_ID, SUBJECT_NO, GRADE) 
VALUES
	(2026001, 1, 'A+'),
	(2026002, 2, 'A0'),
	(2026003, 1, 'B+'),
	(2026004, 3, 'C+'),
	(2026005, 5, 'D0');
    
-- 학생 테이블의 address 컬럼에 default 제약 추가 : '서울시 강남구'
SELECT * FROM STUDENT;

ALTER TABLE STUDENT
	ALTER COLUMN ADDRESS SET DEFAULT '서울시 강남구';
    
DESC STUDENT;

-- A학점을 받은 학생의 정보를 조회
SELECT *
FROM STUDENT S, ENROLLMENT E
WHERE S.STUDENT_ID = E.STUDENT_ID
	AND E.GRADE IN ('A+', 'A0');
    
-- C학점을 받은 학생의 정보와 과목명 조회
SELECT STU.STUDENT_ID, STU.STUDENT_NAME, E.GRADE, SUB.SUBJECT_NO, SUB.SUBJECT_NAME, SUB.INSTRUCTOR_NO
FROM STUDENT STU, ENROLLMENT E, SUBJECT SUB
WHERE STU.STUDENT_ID = E.STUDENT_ID
	AND E.SUBJECT_NO = SUB.SUBJECT_NO
    AND E.GRADE IN ('C+', 'C0');
    

-- 수요일 수업하는 강의의 과목정보와 강사정보 조회
DESC CLASS_TIME;

SELECT *
FROM SUBJECT S, CLASS_TIME C, INSTRUCTOR I
WHERE S.SUBJECT_NO = C.SUBJECT_NO
	AND S.INSTRUCTOR_NO = I.INSTRUCTOR_NO
    AND C.CLASS_TIME LIKE '수%';

-- 목요일 수업 강사정보, 과목명 조회
-- 서브쿼리 사용, 과목명(스칼라서브쿼리)
SELECT INSTRUCTOR_NO
FROM CLASS_TIME C, SUBJECT S
WHERE C.SUBJECT_NO = S.SUBJECT_NO
	AND CLASS_TIME LIKE '목%';

SELECT INSTRUCTOR_NO, INSTRUCTOR_NAME,
	(SELECT SUBJECT_NAME
		FROM SUBJECT S, CLASS_TIME C
        WHERE S.SUBJECT_NO = C.SUBJECT_NO
			AND C.CLASS_TIME LIKE '목%') AS SUBJECT_NAME
FROM INSTRUCTOR
WHERE INSTRUCTOR_NO = (
	SELECT INSTRUCTOR_NO
	FROM CLASS_TIME C, SUBJECT S
	WHERE C.SUBJECT_NO = S.SUBJECT_NO
		AND CLASS_TIME LIKE '목%'
);

-- '정민호' 강사가 강의하는 모든 과목 조회
SELECT *
FROM SUBJECT S, INSTRUCTOR I
WHERE S.INSTRUCTOR_NO = I.INSTRUCTOR_NO
	AND I.INSTRUCTOR_NAME = '정민호';

-- '박지성' 강사가 강의하는 과목과 과목을 수강한 학생정보와 성적을 조회
SELECT INSTRUCTOR_NO
FROM INSTRUCTOR
WHERE INSTRUCTOR_NAME = '박지성';
DESC SUBJECT;

SELECT *
FROM SUBJECT SU, ENROLLMENT E, STUDENT ST
WHERE SU.SUBJECT_NO = E.SUBJECT_NO
	AND E.STUDENT_ID = ST.STUDENT_ID
	AND SU.INSTRUCTOR_NO = (
		SELECT INSTRUCTOR_NO
		FROM INSTRUCTOR
		WHERE INSTRUCTOR_NAME = '박지성'
    );

-- 모든 강사가 강의하는 과목과 성적 조회 (모든 강사 포함)
SELECT *
FROM INSTRUCTOR I LEFT JOIN SUBJECT S ON I.INSTRUCTOR_NO = S.INSTRUCTOR_NO
					LEFT JOIN ENROLLMENT E ON S.SUBJECT_NO = E.SUBJECT_NO;

/************************************************************
	행번호 : ROW_NUMBER() OVER() AS '별칭'
*************************************************************/
USE HRDB2019;

-- 정보시스템 부서의 사원들 연봉이 높은 순으로, 사번, 사원명, 급여 조회
SELECT ROW_NUMBER() OVER(ORDER BY SALARY DESC) AS RNO, EMP_ID, EMP_NAME, SALARY FROM EMPLOYEE WHERE DEPT_ID = 'SYS';

-- 휴가를 많이 사용한 사원 순으로 행번호 포함 정렬
-- 행번호, 사원아이디, 사원명, 휴가일수(총합)
SELECT ROW_NUMBER() OVER(ORDER BY SUM(V.DURATION) DESC) AS RNO, E.EMP_ID, E.EMP_NAME, SUM(V.DURATION) AS SUM
FROM EMPLOYEE E, VACATION V
WHERE E.EMP_ID = V.EMP_ID
GROUP BY E.EMP_ID;

/************************************************************
	석차 : RANK() OVER() AS '별칭'
*************************************************************/
-- 사원의 급여가 높은 순으로 정렬
SELECT RANK() OVER(ORDER BY SALARY DESC) AS 'RANK',
		EMP_ID, EMP_NAME, SALARY
FROM EMPLOYEE;

-- 입사일이 빠른 순서대로 정렬
SELECT RANK() OVER(ORDER BY HIRE_DATE) AS 'RANK',
		EMP_ID, EMP_NAME, SALARY, HIRE_DATE
FROM EMPLOYEE;


/************************************************************
	트리거 생성 : 테이블의 PK 정의 :: '문자' + '000' + 1(AUTO_INCREMENT)
*************************************************************/
-- trigger 생성 : 여러개의 sql문 포함
/************************************************
delimiter $$
create trigger [트리거명]
before insert on [테이블명]
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(mid, 4) AS UNSIGNED)), 0)
INTO max_code
FROM [테이블명]; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.mid = concat('M', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;
************************************************/

CREATE TABLE MEMBER(
	MID		CHAR(5)		PRIMARY KEY,		-- 'M0001' 형식으로 줄거
    NAME	VARCHAR(5)	NOT NULL,
    MDATE	DATETIME
);

SELECT * FROM INFORMATION_SCHEMA.TRIGGERS
WHERE TRIGGER_SCHEMA = 'HRDB2019';

/************************************************
	MID에 들어가는 'M0001' 타입의 회원아이디 트리거
************************************************/
delimiter $$
create trigger TRG_MEMBER_MID
before insert on MEMBER
for each row
begin
declare max_code int;  --  'M0001'

-- 현재 저장된 값 중 가장 큰 값을 가져옴
SELECT IFNULL(MAX(CAST(right(MID, 4) AS UNSIGNED)), 0)
INTO max_code
FROM MEMBER; 

-- 'M0001' 형식으로 아이디 생성, LPAD(값, 크기, 채워지는 문자형식) : M0001
SET NEW.MID = concat('M', LPAD((max_code+1), 4, '0'));

end $$
delimiter ;

DESC MEMBER;
INSERT INTO MEMBER(NAME, MDATE) VALUES('홍길동', NOW());

SELECT * FROM MEMBER;



