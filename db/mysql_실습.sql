/*
	MySQL - 정형 데이터를 저장하는 데이터베이스 
    - RDBMS(Relational Data Base Management System) 구조
    - SQL(Structured Query Language) 문법을 사용하여 데이터의 CRUD 구현
    - C(Create) :: Insert
    - R(Read) :: Select
    - U(Update) :: Update
    - D(Delete) :: Delete
    - 개발자는 DML 중심의 SQL 문법을 숙지하는 것을 권장
    - SQL은 대소문자를 구분하지 않음, 대부분 소문자로 작성
    - snake case 방식으로 파일명 작성. 예) sql_001
    
    SQL 
    - SQL은 크게 DDL, DML, DCL, DTL로 구분할 수 있다.
	1. DDL(Data Definition Language) : 데이터 정의어
	   : 데이터를 저장하기 위한 공간을 생성하고 논리적으로 정의하는 언어
	   : create, alter, truncate, drop 
	2. DML(Data Manipulation Language) : 데이터 조작어
	   : 데이터를 CRUD하는 명령어
	   : insert, select, update, delete
	3. DCL(Data Control Language) : 데이터 제어어
	   : 데이터에 대한 권한과 보안을 정의하는 언어
	   : grant, revoke
	4. DTL(Data Transaction Language,TCL) : 트랜잭션 제어어
	   : 데이터베이스의 처리 작업 단위인 트랜잭션을 관리하는 언어
	   : commit, save, rollback
*/
/********************************************************************
	⚠ 워크벤치 실행시 필수 명령어
    1. 데이터 접속 명령어
		show databases;  -- 데이터 베이스 확인
        use [데이터베이스명]; -- 사용할 데이터베이스 선택
		select database();  -- 사용중인 데이터베이스 조회
        show tables; 		-- 데이터베이스의 모든 테이블 조회
        
********************************************************************/

show databases;
use hrdb2019;
select database();
show tables;


/********************************************************************
	DESC(DESCRIBE) : 테이블 구조 확인
    형식> DESC [테이블명]
********************************************************************/
SHOW TABLES;
DESC UNIT;

/********************************************************************
	SELECT : 테이블 내용 조회
    형식> SELECT [컬럼리스트] FROM [테이블명];
********************************************************************/
SHOW TABLES;
DESC EMPLOYEE;

SELECT EMP_ID, EMP_NAME, SALARY FROM EMPLOYEE;

-- 사원테이블의 사번, 사원명, 성별, 입사일, 급여를 조회
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE, SALARY FROM EMPLOYEE;

-- 부서테이블의 모든 정보 조회
SELECT * FROM DEPARTMENT;

-- AS  : 컬럼명 별칭 부여 
-- 형식> SELECT [컬럼명 as 별칭, ...] FROM [테이블명];

-- 사원테이블의 사번, 사원명, 성별, 입사일, 급여 컬럼을 조회한 한글 컬럼명으로 출력
SELECT EMP_ID AS 사번, EMP_NAME AS 사원명, GENDER AS 성별, HIRE_DATE AS 입사일, SALARY AS 급여 FROM EMPLOYEE;

-- 사원테이블의 ID, NAME, GENDER, HDATE, SALARY 컬럼명으로 조회
SELECT EMP_ID AS ID, EMP_NAME AS NAME, GENDER, HIRE_DATE AS HDATE, SALARY FROM EMPLOYEE;

-- 사원테이블의 사번, 사원명, 부서명, 폰번호, 이메일, 급여, 보너스(급여*10%)를 조회
SELECT EMP_ID AS 사번, EMP_NAME AS 사원명, DEPT_ID AS 부서명, PHONE AS 폰번호, EMAIL AS 이메일, SALARY AS 급여, SALARY*0.1 AS 보너스
	FROM EMPLOYEE;
    
-- 현재 날짜를 조회 : CURDATE()
SELECT CURDATE() AS TODAY FROM DUAL;

/**************************************
	SELECT  : 테이블 내용 상세 조회
    형식> SELECT [컬럼리스트] 
			FROM [테이블명]
            WHERE [조건절];		 
***************************************/

-- 정주고 사원의 정보를 조회
SELECT * FROM EMPLOYEE WHERE EMP_NAME = '정주고';

-- SYS 부서에 속한 모든 사원을 조회 
SELECT * FROM EMPLOYEE WHERE DEPT_ID = 'SYS';

-- 사번이 S0005인 사원의 사원명, 성별, 입사일, 부서아이디, 이메일, 급여를 조회
SELECT EMP_NAME AS 사원명, GENDER AS 성별, HIRE_DATE AS 입사일, DEPT_ID AS 부서아이디, EMAIL 이메일, SALARY 급여
	FROM EMPLOYEE
    WHERE EMP_ID = 'S0005';

-- SYS 부서에 속한 모든 사원들을 조회, 단 출력되는 EMP_ID 컬럼은 '사원번호' 별칭으로 조회
SELECT *, EMP_ID AS 사원번호
	FROM EMPLOYEE
    WHERE DEPT_ID = 'SYS';

-- EMP_NAME '사원명' 별칭 수정


-- !! WHERE 조건절 컬럼으로 별칭을 사용할 수 있을까요???
-- 사원명이 홍길동인 사원을 별칭으로 조회??? ::: WHERE 조건절에서 별칭을 컬럼명으로 사용X 
SELECT EMP_ID, EMP_NAME 이름, GENDER FROM EMPLOYEE
	WHERE 이름 = '홍길동';

-- 전략기획(STG) 부서의 모든 사원들의 사번, 사원명, 입사일, 급여를 조회
SELECT EMP_ID 사번, EMP_NAME 사원명, HIRE_DATE 입사일, SALARY 급여
	FROM EMPLOYEE
    WHERE DEPT_ID = 'STG';

-- 입사일이 2014년 8월 1일인 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE HIRE_DATE = '2014-08-01';

-- 급여가 5000인 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE SALARY = '5000';

-- 성별이 남자인 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE GENDER = 'M';
    
-- 성별이 여자인 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE GENDER = 'F';

-- NULL : 아직 정의되지 않은 미지수
-- 숫자에서는 가장 큰수로 인식, 논리적인 의미를 포함하고 있으므로 등호(=)로는 검색 X, IS 키워드와 함께 사용 O

-- 급여가 NULL인 값을 가진 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE SALARY IS NULL;

-- 영어이름이 정해지지 않은 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE ENG_NAME IS NULL;

-- 퇴사하지 않은 사원들을 조회
SELECT * FROM EMPLOYEE
	WHERE RETIRE_DATE IS NULL;

-- 퇴사하지 않은 사원들의 보너스 컬럼(급여*20%)을 추가하여 조회, 컬럼명은 BONUS
SELECT emp_id, emp_name, eng_name, gender, hire_date, retire_date, dept_id, phone, email, SALARY*0.2 AS BONUS
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NULL;
    
-- 퇴사한 사원들의 사번, 사원명, 이메일, 폰번호, 급여를 조회
SELECT EMP_ID 사번, EMP_NAME 사원명, EMAIL 이메일, PHONE 본번호, SALARY 급여
	FROM EMPLOYEE
    WHERE RETIRE_DATE IS NOT NULL;

-- IFNULL 함수 : NULL 값을 다른 값은 대체하는 방법
-- 형식> IFNULL(NULL포함컬럼명, 대체값)

-- STG 부서에 속한 사원들의 정보 조회, 단, 급여가 NULL인 사원은 0으로 치환
SELECT EMP_ID, EMP_NAME, EMAIL, PHONE, IFNULL(SALARY, 0) AS 급여 FROM EMPLOYEE
	WHERE DEPT_ID = 'STG';
    
SELECT * FROM EMPLOYEE
	WHERE DEPT_ID = 'STG';
    
-- 사원 전체 테이블의 내용을 조회, 단 영어이름이 정해지지 않은 사원들은 'SMITH' 이름으로 치환
SELECT emp_id, emp_name, gender, hire_date, retire_date, dept_id, phone, email, salary, IFNULL(eng_name, 'SMITH') AS 영어이름 
	FROM EMPLOYEE;
	
-- MKT 부서의 사원들을 조회, 재직중인 사원들의 RETIRE_DATE 컬럼은 현재 날짜로 치환
SELECT emp_id, emp_name, eng_name, gender, hire_date, dept_id, phone, email, salary, IFNULL(RETIRE_DATE, CURDATE()) AS 퇴사일
	FROM EMPLOYEE
	WHERE DEPT_ID = 'MKT';

/**************************************
	DISTINCT  : 중복된 데이터를 배제하고 조회
    형식> SELECT DISTINCT [컬럼리스트] ~				
***************************************/
-- 사원테이블의 부서리스트를 조회
SELECT DISTINCT DEPT_ID 부서명
	FROM EMPLOYEE
    ORDER BY 부서명;

-- 주의!! UNIQUE한 컬럼과 함께 조회하는 경우 DISTINCT가 적용되지 않음
SELECT DISTINCT EMP_ID, DEPT_ID
	FROM EMPLOYEE;

/**************************************
	ORDER BY 컬럼 : 데이터 정렬 
    형식> SELECT [컬럼리스트] 
			FROM [테이블]
            WHERE [조건절]
		 ORDER BY [컬럼명, ...] ASC/DESC
***************************************/

-- 급여를 기준으로 오름차순 정렬
SELECT *
FROM EMPLOYEE
ORDER BY SALARY;

-- 모든 사원을 급여, 성별을 기준으로 오름차순 정렬
SELECT *
FROM EMPLOYEE
ORDER BY SALARY, GENDER;

-- ENG_NAME이 널인 사원들을 입사일 기준으로 내림차순 정렬
SELECT *
FROM EMPLOYEE
WHERE ENG_NAME IS NULL
ORDER BY HIRE_DATE DESC;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬
SELECT *
FROM EMPLOYEE
WHERE RETIRE_DATE IS NOT NULL
ORDER BY SALARY DESC;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬, SALARY 컬럼을 '급여' 별칭으로 치환
-- '급여' 별칭으로 ORDER BY가 가능할까요???  :: 별칭으로 ORDER BY 가능함
--  WHERE 조건절 데이터 탐색 > 컬럼리스트 > 정렬
SELECT EMP_ID, EMP_NAME, GENDER, HIRE_DATE, RETIRE_DATE, SALARY AS 급여
FROM EMPLOYEE
WHERE RETIRE_DATE IS NOT NULL
ORDER BY 급여 DESC;

-- 정보시스템(SYS) 부서 사원들 중 입사일이 빠른 순서, 급여를 많이 받는 순서로 정렬
-- HIRE_DATE, SALARY 컬럼은 '입사일','급여' 별칭으로 컬럼리스트 생성 후 정렬
SELECT EMP_ID, EMP_NAME, HIRE_DATE 입사일, SALARY 급여, DEPT_ID
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS'
ORDER BY 입사일, 급여 DESC;

/**************************************
	조건절 + 비교연산자 : 특정 범위 혹은 데이터 검색
    형식> SELECT [컬럼리스트] 
			FROM [테이블]
            WHERE [조건절]
		 ORDER BY [컬럼명, ...] ASC/DESC
***************************************/
-- 급여가 5000 이상인 사원들을 조회, 급여를 오름차순 정렬
SELECT * FROM EMPLOYEE
WHERE SALARY >= 5000
ORDER BY SALARY;

-- 2017-01-01 이후 입사한 사원들을 조회
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE > '2017-01-01'
ORDER BY HIRE_DATE;

-- 입사일이 2015-01-01 이후이거나, 급여가 6000인 이상인 사원들을 조회  
-- ~이거나, ~또는 : OR - 두 개의 조건중 하나만 만족해도 조회가능
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE > '2015-01-01' 
	OR SALARY >= 6000
ORDER BY HIRE_DATE;

-- 입사일이 2015-01-01 이후이고, 급여가 6000인 이상인 사원들을 조회  
-- ~이고 : AND - 두 개의 조건이 모두 만족해야만 조회 가능
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE > '2015-01-01' 
	AND SALARY >= 6000
ORDER BY HIRE_DATE;

-- 특정 기간 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
-- 부서기준으로 오름차순 정렬
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE >= '2015-01-01' AND HIRE_DATE <= '2017-12-31'
ORDER BY DEPT_ID;

-- 급여가 6000 이상 8000 이하인 사원들을 모두 조회
SELECT * FROM EMPLOYEE
WHERE SALARY >= 6000 AND SALARY <= 8000
ORDER BY SALARY;

-- MKT 부서의 사원들의 사번, 사원명, 입사일, 이메일, 급여, 보너스(급여의 20%) 조회
-- 급여가 NULL인 사원의 보너스는 기본 50
-- 보너스가 1000 이상인 사원 조회
-- 보너스가 높은 사원 기준으로 정렬
SELECT EMP_ID 사번, EMP_NAME 사원명, HIRE_DATE 입사일, EMAIL 이메일, SALARY 급여, IFNULL(SALARY*0.2, 50) AS 보너스
FROM EMPLOYEE
WHERE SALARY*0.2 >= 1000
ORDER BY 보너스 DESC;

-- 사원명이 '일지매','오삼식','김삼순' 인 사원들을 조회
SELECT * FROM EMPLOYEE
WHERE EMP_NAME = '일지매' OR EMP_NAME = '오삼식' OR EMP_NAME = '김삼순';

/******************************************************
	논리곱(AND) : BETWEEN ~ AND 
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] BETWEEN 값1 AND 값2;
	논리합(OR) : IN
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] IN (값1, 값2, 값3...);	 
******************************************************/
-- BETWEEN ~ AND
-- 특정 기간 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
-- 부서기준으로 오름차순 정렬
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE BETWEEN '2015-01-01' AND '2017-12-31'
ORDER BY DEPT_ID;

-- 급여가 6000 이상 8000 이하인 사원들을 모두 조회
SELECT * FROM EMPLOYEE
WHERE SALARY BETWEEN 6000 AND 8000
ORDER BY SALARY;

-- IN
-- 사원명이 '일지매','오삼식','김삼순' 인 사원들을 조회
SELECT * FROM EMPLOYEE
WHERE EMP_NAME IN ('일지매', '오삼식', '김삼순');

-- 부서아이디가 MKT, SYS, STG 에 속한 모든 사원 조회
SELECT * FROM EMPLOYEE
WHERE DEPT_ID IN ('MKT', 'SYS', 'STG')
ORDER BY DEPT_ID;

/******************************************************
	특정 문자열 검색 : 와일드 문자(%, _) + LIKE 연산자
					% : 전체, _ : 한글자
    형식> SELECT [컬럼리스트] FROM [테이블]
            WHERE [컬럼명] LIKE '와일드 문자 포함 검색어';		 
******************************************************/
-- '한'씨 성을 가진 모든 사원을 조회
SELECT * FROM EMPLOYEE
WHERE EMP_NAME LIKE '한%';

-- 영어이름이 'f'로 시작하는 모든 사원을 조회
SELECT * FROM EMPLOYEE
WHERE ENG_NAME LIKE 'F%';

-- 이메일 이름 중 두번째 자리에 'a'가 들어가는 모든 사원을 조회
SELECT * FROM EMPLOYEE
WHERE EMAIL LIKE '_a%';

-- 이메일 아이디가 4자인 모든 사원을 조회
SELECT * FROM EMPLOYEE
WHERE EMAIL LIKE '____@%';

-- 부서아이디에 'A'가 들어가는 모든 사원들을 조회
SELECT *
FROM EMPLOYEE
WHERE DEPT_ID LIKE '%A%';

/******************************************************
	내장함수 : 숫자함수, 문자함수, 날짜함수
    호출되는 위치 - [컬럼리스트], [조건절의 컬럼명]
******************************************************/
-- [숫자함수]
-- 함수 실습을 위한 테이블 : DUAL

-- (1) ABS(숫자) : 절대값
SELECT ABS(123), ABS(-456) FROM DUAL;

-- (2) 소수점 절삭 : FLOOR(숫자) : 소수점 버림, TRUNCATE(숫자, 자리수) : 버림 후 자리수 까지 표현
SELECT FLOOR(1.234), TRUNCATE(1.234, 2) FROM DUAL;

-- 사원테이블의 SYS 부서 사원들의 사번, 사원명, 부서아이디, 폰번호, 급여, 보너스(급여의 25%) 컬럼을 추가하여 조회, 보너스는 소수점 1자리 출력
DESC EMPLOYEE;

SELECT EMP_ID 사번, EMP_NAME 사원명, DEPT_ID 부서아이디, PHONE 폰번호, SALARY 급여, TRUNCATE(SALARY*0.25, 1) AS 보너스
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';

-- (3) RAND() : 임의의 난수 발생 함수 ( 0 ~ 1 )
SELECT RAND() FROM DUAL;

-- 정수 3자리(0 ~ 999) 사이의 난수 발생
SELECT FLOOR(RAND() * 1000) AS NUMBER FROM DUAL;

-- 정수 4자리 (0 ~ 9999) 사이의 난수 발생, 소수점 2자리
SELECT TRUNCATE(RAND() * 10000, 2) AS NUMBER FROM DUAL;

-- (4) MOD(숫자, 나누는수) : 나머지
SELECT MOD(7,2) ODD, MOD(8,2) EVEN FROM DUAL;

-- 3자리 수를 랜덤으로 발생시켜 홀수, 짝수 구분
SELECT MOD( FLOOR(RAND()*1000), 2 ) 홀짝 FROM DUAL;


-- [문자함수]
-- (1) CONCAT(문자열1, 문자열2,...) : 문자열 결합
SELECT CONCAT('DD', 'TT') AS STRING FROM DUAL;

-- 사원테이블의 사원번호, 사원명, 사원명2 컬럼을 생성하여 조회
-- 사원명2 : 사원번호(사원명)  예) S0001(홍길동)
SELECT EMP_ID, EMP_NAME, CONCAT( EMP_ID, '(', EMP_NAME, ')' ) AS 사원명2 FROM EMPLOYEE;

-- 사번, 사원명, 영어이름, 입사일, 폰번호, 급여를 조회
-- 영어이름의 출력형식을 '홍길동/hong' 타입으로 출력
-- 영어이름이 null인 경우에는 'smith'를 기본으로 조회
SELECT EMP_ID, EMP_NAME, CONCAT( EMP_NAME, '/', IFNULL(ENG_NAME, LOWER('SMITH')) ) AS 영어이름, HIRE_DATE, PHONE, SALARY
FROM EMPLOYEE;

-- (2) SUBSTRING(문자열, 위치, 개수) : 문자열 추출, 공백도 포함
SELECT SUBSTRING('ABCDEFGHIJK', 3, 2) AS STR FROM DUAL;
SELECT SUBSTRING(CURDATE(),1,4) AS YEAR, SUBSTRING(CURDATE(),6,2) AS MONTH FROM DUAL;

-- 사원테이블의 사번, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
SELECT EMP_ID, EMP_NAME, HIRE_DATE, YEAR(HIRE_DATE) 년, MONTH(HIRE_DATE) 월, DAY(HIRE_DATE) 일, SALARY
FROM EMPLOYEE;

-- 2015년도에 입사한 모든 사원 조회
SELECT *
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) = '2015';

-- 2018년도에 입사한 SYS 부서 사원 조회
SELECT *
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) = '2018' AND DEPT_ID = 'SYS';

-- (3) LEFT, RIGHT
SELECT LEFT('HELLO',2) FROM DUAL;
SELECT RIGHT('HELLO',3) FROM DUAL;
SELECT LEFT( CURDATE(),4 ) YEAR FROM DUAL;
SELECT RIGHT( CURDATE(),2 ) DAY FROM DUAL;

-- 2015년도부터 2017년 사이에 입사한 모든 사원 조회
SELECT *
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) BETWEEN '2015' AND '2017'
ORDER BY HIRE_DATE;

-- 사원번호, 사원명, 입사일, 폰번호, 급여 조회
-- 폰번호는 마지막 4자리만 출력
SELECT EMP_ID, EMP_NAME, HIRE_DATE, RIGHT(PHONE, 4), SALARY
FROM EMPLOYEE;

-- (4) UPPER(), LOWER() : 대소문자 치환
SELECT UPPER('welcomeToMysql') AS UPPER, LOWER('welcomeToMysql') AS LOWER FROM DUAL;

-- 사번, 사원명, 영어이름, 부서아이디, 이메일, 급여 조회
-- 영어이름은 대문자, 부서아이디는 소문자, 이메일은 대문자
SELECT EMP_ID, EMP_NAME, UPPER(IFNULL(ENG_NAME,'')), LOWER(DEPT_ID), UPPER(EMAIL), SALARY
FROM EMPLOYEE;

-- (5) TRIM() : 앞뒤 공백제거
SELECT TRIM('  HELLO MY NAME IS DK ') AS STR FROM DUAL;

-- (6) FORMAT(문자열, 소수점자리) : 문자열 포맷 - 3자리씩 ,로 구분
SELECT FORMAT(123456, 1) AS FORMAT1,
		FORMAT('123456', 0) AS FORMAT2
FROM DUAL;


-- 사번, 사원명, 입사일, 폰번호, 급여, 보너스(급여 20%) 조회
-- 급여, 보너스는 소수점 없이 3자리씩 구분
-- 급여가 NULL인 경우 기본값 0
-- 2016년부터 2017년 사이에 입사한 사원
-- 사번 기준으로 내림차순 정렬
SELECT EMP_ID, EMP_NAME, HIRE_DATE, PHONE, CONCAT(FORMAT(IFNULL(SALARY, 0), 0), '원') SALARY, FORMAT(IFNULL(SALARY*0.2, 0), 0) AS BONUS
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) BETWEEN '2016' AND '2017'
ORDER BY EMP_ID DESC;


-- [날짜 함수]
-- CURdATE() : 년-월-일 형식으로 현재 날짜 출력
-- SYSDATE(), NOW() : 년-월-일 시:분:초
SELECT CURDATE() AS TODAY FROM DUAL;
SELECT SYSDATE(), NOW() FROM DUAL;

-- [형변환 함수]
-- CAST(변환값 AS 데이터타입)
-- CONVERT(변환값 AS 데이터타입) :: MYSQL OLD
SELECT 123 AS NUMBER, CAST(123 AS CHAR) AS STR FROM DUAL;
SELECT '1234'AS STR, CAST('1234' AS SIGNED INTEGER) AS NUMBER FROM DUAL;
SELECT '20260421' AS STR, CAST('20260421' AS DATE) AS DATE FROM DUAL;

-- NOW()
SELECT NOW() AS DATE, CAST(NOW() AS CHAR) AS STR, CAST(CAST(NOW() AS CHAR) AS DATE) AS DATE1
FROM DUAL;

-- SIGNED INTEGER, UNSIGNED INTEGER
SELECT '1234' AS STR, CAST('1234' AS SIGNED INTEGER) AS CAST_INT1, CAST('1234' AS UNSIGNED INTEGER) AS CAST_INT2,
	CAST('1234' AS DECIMAL(10,2)) AS CAST_DECIMAL
FROM DUAL;

-- [문자열 치환 함수]
-- REPLACE(문자열, OLD, NEW)
SELECT REPLACE('홍-길-동','-','/') AS REPLACE_STR FROM DUAL;


-- 사원테이블의 사번, 사원명, 입사일, 퇴사일, 부서아이디, 폰번호, 급여 조회
-- 입사일, 퇴사일 출력은 '-' 을 '/'로 치환하여 출력
-- 재직중인 사원은 현재날짜를 출력
-- 급여 출력시 3자리 콤마(,) 구분
SELECT EMP_ID, EMP_NAME, REPLACE(HIRE_DATE,'-','/') 입사일, 
	REPLACE(IFNULL(RETIRE_DATE, CURDATE()),'-','/') 퇴사일, DEPT_ID, PHONE, FORMAT(SALARY, 0) AS SALARY
FROM EMPLOYEE;

-- '20150101' 입력된 날짜를 기준으로 해당 날짜 이후에 입사한 사원들을 모두 조회
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE >= CAST('20150101' AS DATE)
ORDER BY HIRE_DATE;

-- '20150101' ~ '20171231' 사이에 입사한 사원들을 모두 조회
SELECT * FROM EMPLOYEE
WHERE HIRE_DATE BETWEEN CAST('20150101' AS DATE) AND CAST('20171231' AS DATE)
ORDER BY HIRE_DATE;

/******************************************************
	집계(그룹) 함수 : SUM, AVG, COUNT, MIN, MAX...
    GROUP BY : 그룹함수를 적용하기 위한 그룹핑 컬럼 정의
    HAVING : 그룹함수에서 사용하는 조건절
******************************************************/

-- (1) SUM(숫자) : 전체 총합을 구하는 함수
-- 사원 테이블의 총 급여를 조회
SELECT SUM(SALARY) AS 총급여
FROM EMPLOYEE;				-- NULL은 집계 함수에서 제외

SELECT COUNT(*) FROM EMPLOYEE;			-- NULL 값이 포함된 20개
SELECT COUNT(SALARY) FROM EMPLOYEE;  	-- NULL 값 제외한 19개

-- (2) AVG(숫자) : 전체 평균을 구하는 함수
-- 사원들의 전체 급여 평균을 조회
SELECT CONCAT('$', FORMAT(AVG(IFNULL(SALARY, 0)), 0)) AS 급여평균 
FROM EMPLOYEE;

-- SYS부서 전체의 급여 총액과 평균 조회
SELECT CONCAT(FORMAT(SUM(SALARY), 0), '만원') 급여총액, CONCAT(FORMAT(AVG(SALARY), 0), '만원') 평균급여
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';

-- (3) MAX() : 최대값
-- 사원테이블에서 가장 높은 급여를 받는 사원을 조회
SELECT CONCAT(FORMAT(MAX(SALARY), 0), '만원') AS 최대급여
FROM EMPLOYEE;

-- (4) MIN() : 최소값
-- 사원테이블에서 가장 낮은 급여를 받는 사원을 조회
SELECT CONCAT(FORMAT(MIN(SALARY), 0), '만원') AS 최소급여
FROM EMPLOYEE;

-- 사원들의 총 급여, 평균 급여, 최대 급여, 최소 급여를 조회
-- 세자리씩 구분, 화폐단위 '만원' 출력
-- 현재 날짜 기준 급여컬럼이 NULL인 경우에는 0으로 대체
SELECT CONCAT(FORMAT(SUM(IFNULL(SALARY, 0)), 0), '만원') 총급여,
		CONCAT(FORMAT(AVG(IFNULL(SALARY, 0)), 0), '만원') 평균급여,
        CONCAT(FORMAT(MAX(IFNULL(SALARY, 0)), 0), '만원') 최대급여,
        CONCAT(FORMAT(MIN(IFNULL(SALARY, 0)), 0), '만원') 최소급여
FROM EMPLOYEE;

-- (5) COUNT() : 조건에 맞는 데이터의 ROW 수를 조회, NULL 제외 (*는 NULL 포함)
-- 사원테이블의 전체 ROW 수
SELECT COUNT(*) FROM EMPLOYEE;
SELECT COUNT(SALARY) FROM EMPLOYEE;


-- 재직중인 사원 수 조회
SELECT COUNT(EMP_ID) 사원수
FROM EMPLOYEE
WHERE RETIRE_DATE IS NULL;

-- 퇴사한 사원 수 조회
SELECT COUNT(EMP_ID) 사원수
FROM EMPLOYEE
WHERE RETIRE_DATE IS NOT NULL;

-- 2015년도에 입사한 사원 수 조회
SELECT COUNT(EMP_ID) AS '2015 입사자'
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) = '2015';
-- WHERE SUBSTRING(HIRE_DATE,1,4) = '2015';

-- SYS 부서의 사원 수 조회
SELECT COUNT(EMP_ID) AS 'SYS부서 사원수'
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';

-- 가장 빠른 입사자, 가장 늦은 입사자
SELECT MIN(HIRE_DATE) '가장 빠른 입사자', MAX(HIRE_DATE) '가장 늦은 입사자'
FROM EMPLOYEE;

-- 가장 빨리 입사한 사람의 정보
SELECT *
FROM EMPLOYEE
WHERE HIRE_DATE = ( SELECT MIN(HIRE_DATE) FROM EMPLOYEE ) ;

-- [GROUP BY]
-- 그룹함수와 일반컬럼은 함께 사용 불가 / 사용하려면 일반컬럼을 GROUP BY로 그룹핑
-- 단, GROUP BY 대상인 일반 컬럼은 그룹핑이 가능해야함 (UNIQUE 컬럼 X)

-- 부서별 사원수, 총 급여, 평균 급여
SELECT DEPT_ID, COUNT(EMP_ID) 사원수, SUM(SALARY) 총급여, FORMAT(AVG(SALARY), 0) 평균급여, MAX(SALARY), MIN(SALARY)
FROM EMPLOYEE
GROUP BY DEPT_ID
ORDER BY DEPT_ID;

DESC DEPARTMENT;

SELECT E.DEPT_ID, D.DEPT_NAME, COUNT(E.EMP_ID) 사원수, SUM(E.SALARY) 총급여
FROM EMPLOYEE E JOIN DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID
GROUP BY DEPT_ID;

-- 입사 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회
SELECT YEAR(HIRE_DATE) 입사연도, COUNT(EMP_ID) 사원수, SUM(SALARY) 총급여, FORMAT(AVG(SALARY),0) 평균급여, MAX(SALARY) 최대급여, MIN(SALARY) 최소급여
FROM EMPLOYEE
GROUP BY YEAR(HIRE_DATE);

-- [HAVING 조건절] : GROUP BY 결과에 대한 조건을 정의

-- 부서별 총 급여 조회 / 총 급여가 30000이상인 부서만 조회
SELECT DEPT_ID, SUM(IFNULL(SALARY, 0)) 총급여
FROM EMPLOYEE
GROUP BY DEPT_ID
HAVING SUM(SALARY) >= 30000;

-- 
SELECT YEAR(HIRE_DATE) 입사연도, COUNT(EMP_ID) 사원수, SUM(SALARY) 총급여, FORMAT(AVG(SALARY),0) 평균급여, MAX(SALARY) 최대급여, MIN(SALARY) 최소급여
FROM EMPLOYEE
GROUP BY YEAR(HIRE_DATE)
HAVING SUM(SALARY) >= 30000;

-- [ROLLUP 함수] 리포팅을 위한 함수
-- 부서별 사원수, 총급여, 평균급여 조회
SELECT  IF(GROUPING(DEPT_ID),'총계', DEPT_ID) , 
		COUNT(EMP_ID), SUM(SALARY), AVG(SALARY)
FROM EMPLOYEE
GROUP BY DEPT_ID WITH ROLLUP;

-- 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회 / ROLLUP 함수 적용
-- GROUPING 함수 안에는 함수를 넣을 수 없음 -> 서브 쿼리 사용하는 이유
SELECT IF(GROUPING(HIRE_DATE_YEAR), '총계', HIRE_DATE_YEAR) AS 입사연도,
		COUNT(EMP_ID) 사원수, SUM(SALARY) 총급여, FORMAT(AVG(SALARY),0) 평균급여, MAX(SALARY) 최대급여, MIN(SALARY) 최소급여
FROM ( SELECT *, YEAR(HIRE_DATE) AS HIRE_DATE_YEAR
		FROM EMPLOYEE ) T
GROUP BY HIRE_DATE_YEAR WITH ROLLUP;

-- [LIMIT 함수] 출력개수를 제한하여 조회
-- ORACLE의 ROWNUM 함수와 동일

-- 전체 사원 리스트 중 상위 5개만 출력
SELECT * FROM EMPLOYEE
LIMIT 5;
    
-- 최대급여 5명 사원 출력
SELECT * FROM EMPLOYEE
ORDER BY SALARY DESC
LIMIT 5;

/******************************************************
	조인(JOIN) : 두개 이상의 테이블을 연동하여 하나의 데이터셋 구성
    ERD(Entity Relation Diagram) : 데이터베이스 설계도(구조도)
    
    ** ANSI SQL : 데이터베이스 시스템들의 표준 SQL **
    
    조인(JOIN) 종류
    (1) CROSS JOIN(CARTESIAN PRODUCT)
		: 테이블의 데이터 전체를 조인
        예) 테이블1(10 ROWS) * 테이블2(10 ROWS) = 결과(100 ROWS)
        
	(2) INNER JOIN(EQUI JOIN)
		: 두개 이상의 테이블들이 조인키를 통해 조인
        
	(3) OUTER JOIN - INNER JOIN + 조인에서 제외한 ROW 포함
		LEFT OUTER JOIN : 왼쪽 테이블의 ROW 포함
        RIGHT OUTER JOIN : 오른쪽 테이블의 ROW 포함
        
	(4) SELF JOIN - 한 테이블을 두개의 테이블처럼 조인
******************************************************/

-- [CROSS JOIN]
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블1] CROSS JOIN [테이블2]
-- 		WHERE [조건절]
-- [ORACLE]
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블1], [테이블2]
-- 		WHERE [조건절]

-- EMPLOYEE, DEPARTMENT
SELECT COUNT(*) FROM EMPLOYEE;		-- 20
SELECT COUNT(*) FROM DEPARTMENT;	-- 7

SELECT COUNT(*) 
FROM EMPLOYEE CROSS JOIN DEPARTMENT; 	-- 140

-- 사원, 휴가, 부서 테이블 크로스조인
SELECT *
FROM EMPLOYEE, VACATION, DEPARTMENT;

-- [INNER JOIN(EQUI JOIN)]
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블1] INNER JOIN [테이블2]
-- 			ON [테이블1.조인컬럼] = [테이블2.조인컬럼]

-- 형식2> SELECT [컬럼리스트]
-- 		FROM [테이블1], [테이블2]
-- 			WHERE [테이블1.조인컬럼] = [테이블2.조인컬럼]

SELECT COUNT(*) 
FROM EMPLOYEE INNER JOIN DEPARTMENT
	ON EMPLOYEE.DEPT_ID = DEPARTMENT.DEPT_ID;
    
SELECT COUNT(*) 
FROM EMPLOYEE, DEPARTMENT
	WHERE EMPLOYEE.DEPT_ID = DEPARTMENT.DEPT_ID;
    
-- 사원테이블, 부서테이블, 본부테이블 INNER JOIN
DESC UNIT;
DESC DEPARTMENT;

SELECT COUNT(*)
FROM EMPLOYEE E, DEPARTMENT D, UNIT U
WHERE E.DEPT_ID = D.DEPT_ID AND D.UNIT_ID = U.UNIT_ID;

SELECT COUNT(*)
FROM EMPLOYEE E INNER JOIN DEPARTMENT D
		ON E.DEPT_ID = D.DEPT_ID
	INNER JOIN UNIT U
		ON D.UNIT_ID = U.UNIT_ID;
        
-- 모든 사원들의 사원번호, 사원명, 부서아이디, 부서명, 입사일, 급여 조회
DESC DEPARTMENT;

SELECT EMP_ID, EMP_NAME, E.DEPT_ID, DEPT_NAME, HIRE_DATE, SALARY
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID;

--
SELECT EMP_NAME, HIRE_DATE, IFNULL(RETIRE_DATE, CURDATE()) 퇴사일, SALARY, D.DEPT_ID, DEPT_NAME
FROM EMPLOYEE E INNER JOIN DEPARTMENT D
		ON E.DEPT_ID = D.DEPT_ID
WHERE D.DEPT_NAME = '영업';

-- '2015년' 입사자들의 사번, 사원명, 입사일, 부서명, 본부아이디, 본부명을 조회
SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_NAME, U.UNIT_ID, UNIT_NAME 
FROM EMPLOYEE E, DEPARTMENT D, UNIT U
WHERE E.DEPT_ID = D.DEPT_ID
	AND D.UNIT_ID = U.UNIT_ID
    AND YEAR(HIRE_DATE) = '2015';

-- 인사과('인사')에 속한 사원들 중에 휴가를 사용한 사원의 내역 조회
DESC EMPLOYEE;
DESC VACATION;
SELECT * FROM VACATION;


SELECT *
FROM EMPLOYEE E, VACATION V, DEPARTMENT D
WHERE E.EMP_ID = V.EMP_ID
	AND E.DEPT_ID = D.DEPT_ID
    AND D.DEPT_NAME = '인사'
ORDER BY EMP_NAME;
	
    
SELECT *
FROM EMPLOYEE, DEPARTMENT
WHERE EMP_ID IN (
	SELECT EMP_ID
    FROM VACATION
)
	AND EMPLOYEE.DEPT_ID = DEPARTMENT.DEPT_ID
    AND DEPARTMENT.DEPT_NAME = '인사'
ORDER BY EMP_NAME;
    
-- 사원별 휴가 사용 일수를 조회 (사원아이디, 사원명, 휴가 일수 출력)
SELECT E.EMP_ID, E.EMP_NAME, SUM(DURATION) '휴가 일수'
FROM EMPLOYEE E, VACATION V
WHERE E.EMP_ID = V.EMP_ID
GROUP BY E.EMP_NAME, E.EMP_ID;

-- 영업부서 사원의 사원명, 폰번호, 부서명, 휴가사용 이유, 소속 본부 조회
SELECT E.EMP_NAME, E.PHONE, D.DEPT_NAME, V.REASON, U.UNIT_NAME
FROM EMPLOYEE E, VACATION V, UNIT U, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID
	AND E.EMP_ID = V.EMP_ID
    AND U.UNIT_ID = D.UNIT_ID
	AND D.DEPT_NAME = '영업';

-- 영업부서 사원의 사원명, 폰번호, 부서명, 휴가사용 이유, 소속 본부 조회    
-- 휴가 사용 이유가 두통인 사원 조회
SELECT E.EMP_NAME, E.PHONE, D.DEPT_NAME, V.REASON, U.UNIT_NAME
FROM EMPLOYEE E, VACATION V, UNIT U, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID
	AND E.EMP_ID = V.EMP_ID
    AND U.UNIT_ID = D.UNIT_ID
	AND D.DEPT_NAME = '영업'
    AND V.REASON = '두통';
    
-- 2014년부터 2016년까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
-- 사원아이디, 사원명, 부서명, 입사일, 소속본부를 조회
-- 소속본부 기준으로 오름차순 정렬
SELECT E.EMP_ID, E.EMP_NAME, D.DEPT_NAME, E.HIRE_DATE, U.UNIT_NAME
FROM EMPLOYEE E, DEPARTMENT D, UNIT U
WHERE E.DEPT_ID = D.DEPT_ID
	AND D.UNIT_ID = U.UNIT_ID
    AND YEAR(E.HIRE_DATE) BETWEEN '2014' AND '2016'
    AND RETIRE_DATE IS NULL
ORDER BY UNIT_NAME;

-- 부서별 총급여, 평균급여, 총휴가 사용일수를 조회
-- 부서명, 부서아이디, 총급여, 평균급여, 휴가 사용일수
DESC VACATION;

SELECT D.DEPT_NAME, D.DEPT_ID, SUM(E.SALARY) 총급여, FORMAT(AVG(E.SALARY), 2) 평균급여, SUM(V.DURATION) 총휴가일수
FROM EMPLOYEE E, DEPARTMENT D, VACATION V
WHERE E.DEPT_ID = D.DEPT_ID
	AND E.EMP_ID = V.EMP_ID
GROUP BY D.DEPT_ID;

-- 본부별 부서의 휴가 사용 일수 조회
SELECT IF(GROUPING(U.UNIT_ID), '총계', U.UNIT_ID) AS 본부아이디,
		IF(GROUPING(D.DEPT_ID), '본부 별 소계', D.DEPT_ID) AS 부서아이디, 
        SUM(V.DURATION) 휴가총일수
FROM DEPARTMENT D, UNIT U, EMPLOYEE E, VACATION V
WHERE D.DEPT_ID = E.DEPT_ID
	AND D.UNIT_ID = U.UNIT_ID
    AND E.EMP_ID = V.EMP_ID
GROUP BY U.UNIT_ID, D.DEPT_ID WITH ROLLUP;

-- [OUTER JOIN(EQUI JOIN)]
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블1] LEFT/RIGHT OUTER JOIN [테이블2]
-- 			ON [테이블1.조인컬럼] = [테이블2.조인컬럼]

-- 부서별 사원수 조회
SELECT D.DEPT_ID '부서 아이디', DEPT_NAME, COUNT(EMP_ID) AS '부서별 사원수'
FROM EMPLOYEE E RIGHT OUTER JOIN DEPARTMENT D
	ON E.DEPT_ID = D.DEPT_ID
GROUP BY D.DEPT_ID;

-- 모든 부서의 아이디, 부서명, 본부명을 조회
SELECT D.DEPT_ID, D.DEPT_NAME, U.UNIT_NAME
FROM DEPARTMENT D LEFT OUTER JOIN UNIT U
	ON D.UNIT_ID = U.UNIT_ID;

-- 본부별 부서의 사용일 수 조회
-- 부서의 누락 없이 모두 출력
SELECT U.UNIT_ID, D.DEPT_ID, SUM(V.DURATION) '휴가 사용 일수'
FROM EMPLOYEE E JOIN VACATION V ON E.EMP_ID = V.EMP_ID
                RIGHT OUTER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID
                LEFT OUTER JOIN UNIT U 	ON U.UNIT_ID = D.UNIT_ID
GROUP BY U.UNIT_ID, D.DEPT_ID
ORDER BY SUM(V.DURATION);

SELECT U.UNIT_ID, U.UNIT_NAME, D.DEPT_ID, D.DEPT_NAME, SUM(V.DURATION)
FROM EMPLOYEE E RIGHT OUTER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID
				LEFT OUTER JOIN UNIT U ON D.UNIT_ID = U.UNIT_ID
				LEFT OUTER JOIN VACATION V ON E.EMP_ID = V.EMP_ID
GROUP BY U.UNIT_ID, D.DEPT_ID
ORDER BY SUM(V.DURATION);
				
-- 2017년부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명, 본부명 조회
-- 단, 퇴사한 사원들 제외
SELECT E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_NAME, U.UNIT_NAME
FROM EMPLOYEE E RIGHT OUTER JOIN DEPARTMENT D ON E.DEPT_ID = D.DEPT_ID
				LEFT OUTER JOIN UNIT U		  ON D.UNIT_ID = U.UNIT_ID
WHERE E.RETIRE_DATE IS NULL
	AND YEAR(HIRE_DATE) BETWEEN '2017' AND '2018';
    

-- 부서에 본부가 안정해진게 있어서 그 부서에 사원이 결과에 안나옴...
SELECT E.EMP_NAME, E.HIRE_DATE, E.SALARY, D.DEPT_NAME, U.UNIT_NAME
FROM EMPLOYEE E, DEPARTMENT D, UNIT U
WHERE E.DEPT_ID = D.DEPT_ID
	AND D.UNIT_ID = U.UNIT_ID
	AND YEAR(E.HIRE_DATE) BETWEEN '2017' AND '2018'
    AND RETIRE_DATE IS NULL;


-- [SELF JOIN] 자신의 테이블을 조인
-- 형식> SELECT [컬럼리스트]
-- 		FROM [테이블원본] AS T1, [테이블사본] AS T2
-- 		WHERE T1.[조인키] = T2.[조인키]

-- SELF 조인은 서브쿼리 형식으로 변환하여 사용됨

SELECT *
FROM EMPLOYEE T1, EMPLOYEE T2
WHERE T1.EMP_ID = T2.EMP_ID;

/******************************************************
	서브쿼리(Sub Query) : 메인 쿼리에 다른 쿼리를 추가하여 실행
    - (쿼리작성) 괄호안에 쿼리를 작성하여 메인 쿼리에 추가
    형식> SELECT [컬럼리스트]		-> 스칼라(SCALAR SUB QUERY)
		 FROM [테이블명]			-> 인라인 뷰(INLINE VIEW)
         WHERE [조건절]			-> 서브쿼리 / 중첩서브쿼리(NESTED SUB QUERY)
******************************************************/

-- '정보시스템' 부서의 사원들의 사번, 사원명, 입사일, 부서 아이디
SELECT DEPT_ID
FROM DEPARTMENT
WHERE DEPT_NAME = '정보시스템';

SELECT EMP_ID, EMP_NAME, HIRE_DATE, DEPT_ID
FROM EMPLOYEE
WHERE DEPT_ID = (
	SELECT DEPT_ID
	FROM DEPARTMENT
	WHERE DEPT_NAME = '정보시스템'
);

-- 홍길동 사원이 속한 부서아이디, 부서명, 부서 오픈일 조회
DESC DEPARTMENT;

SELECT DEPT_ID
FROM EMPLOYEE
WHERE EMP_NAME = '홍길동';

SELECT DEPT_ID, DEPT_NAME, START_DATE
FROM DEPARTMENT
WHERE DEPT_ID = (
	SELECT DEPT_ID
	FROM EMPLOYEE
	WHERE EMP_NAME = '홍길동'	
);

-- 홍길동 사원의 휴가 사용 내역 조회
SELECT EMP_ID
FROM EMPLOYEE
WHERE EMP_NAME = '홍길동';

SELECT * , (SELECT '홍길동' FROM DUAL) AS 이름
FROM VACATION
WHERE EMP_ID = (
	SELECT EMP_ID
	FROM EMPLOYEE
	WHERE EMP_NAME = '홍길동'
);

-- '제3본부'에 속한 모든 부서를 조회

SELECT UNIT_ID
FROM UNIT
WHERE UNIT_NAME = '제3본부';

SELECT *
FROM DEPARTMENT
WHERE UNIT_ID = (
	SELECT UNIT_ID
	FROM UNIT
	WHERE UNIT_NAME = '제3본부'
);

-- 최고 연봉을 받는 사원의 정보를 조회
SELECT MAX(SALARY)
FROM EMPLOYEE;

SELECT *
FROM EMPLOYEE
WHERE SALARY = (
	SELECT MAX(SALARY)
	FROM EMPLOYEE
);

-- 최근에 입사한 사원의 정보를 조회
SELECT MAX(HIRE_DATE)
FROM EMPLOYEE;

SELECT *
FROM EMPLOYEE
WHERE HIRE_DATE = (
	SELECT MAX(HIRE_DATE)
	FROM EMPLOYEE
);


-- 가장 먼저 퇴사한 사람
SELECT *
FROM EMPLOYEE
WHERE RETIRE_DATE = (
	SELECT MIN(RETIRE_DATE)
    FROM EMPLOYEE
);

-- 가장 많은 휴가를 사용한 사원이 속한 부서의 모든 사원들을 조회
SELECT EMP_ID, SUM(DURATION)
FROM VACATION
GROUP BY EMP_ID
HAVING SUM(DURATION) = (
	SELECT MAX(SUM)
	FROM (
		SELECT SUM(DURATION) AS SUM
		FROM VACATION
		GROUP BY EMP_ID
	) T
);

SELECT MAX(SUM)
FROM (
	SELECT SUM(DURATION) AS SUM
	FROM VACATION
	GROUP BY EMP_ID
) T;

-- 
SELECT MAX(DURATION)
FROM VACATION;

SELECT EMP_ID
FROM VACATION 
WHERE DURATION = (
	SELECT MAX(DURATION)
	FROM VACATION
);

SELECT EMP_ID
FROM VACATION
ORDER BY DURATION LIMIT 1;

SELECT DEPT_ID
FROM EMPLOYEE
WHERE EMP_ID = (
	SELECT EMP_ID
	FROM VACATION
	ORDER BY DURATION LIMIT 1
);

SELECT *
FROM EMPLOYEE
WHERE DEPT_ID = (
	SELECT DEPT_ID
	FROM EMPLOYEE
	WHERE EMP_ID = (
		SELECT EMP_ID
		FROM VACATION
		ORDER BY DURATION LIMIT 1
	)
);

SELECT D.DEPT_ID, D.DEPT_NAME
FROM EMPLOYEE E, DEPARTMENT D, VACATION V
WHERE E.DEPT_ID = D.DEPT_ID
	AND E.EMP_ID = V.EMP_ID
ORDER BY DURATION DESC LIMIT 1;


-- [서브쿼리 : 다중행 - IN, ANY, EXISTS...]

-- '제3본부'에 속한 모든 사원 정보 조회
SELECT UNIT_ID
FROM UNIT
WHERE UNIT_NAME = '제3본부';

SELECT DEPT_ID
FROM DEPARTMENT
WHERE UNIT_ID = (
	SELECT UNIT_ID
	FROM UNIT
	WHERE UNIT_NAME = '제3본부'
);

SELECT *
FROM EMPLOYEE
WHERE DEPT_ID IN (
	SELECT DEPT_ID
	FROM DEPARTMENT
	WHERE UNIT_ID = (
		SELECT UNIT_ID
		FROM UNIT
		WHERE UNIT_NAME = '제3본부'
	)
);


-- '제3본부'에 속한 모든 사원 휴가 사용 정보 조회
SELECT *
FROM VACATION
WHERE EMP_ID IN (
	SELECT EMP_ID
	FROM EMPLOYEE
	WHERE DEPT_ID IN (
		SELECT DEPT_ID
		FROM DEPARTMENT
		WHERE UNIT_ID = (
			SELECT UNIT_ID
			FROM UNIT
			WHERE UNIT_NAME = '제3본부'
		)
	)
);

-- 휴가를 한번이라도 사용한 모든 사원 조회
SELECT *
FROM EMPLOYEE E
WHERE EXISTS (
	SELECT 1
    FROM VACATION V
    WHERE V.EMP_ID = E.EMP_ID
);

-- [인라인 뷰 : 메인쿼리의 테이블자리(FROM)에 들어가는 서브쿼리 형식]
-- 휴가를 사용한 사원의 정보만 출력
-- 사원별 휴가 사용 일 수 그룹핑, 사원아이디, 사원명, 입사일, 급여, 휴가 사용 일수 조회

SELECT EMP_ID, SUM(DURATION)
FROM VACATION
GROUP BY EMP_ID;

SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, T.SUM_DURATION
FROM EMPLOYEE E, 
	(SELECT EMP_ID, SUM(DURATION) AS SUM_DURATION
	FROM VACATION
	GROUP BY EMP_ID) T
WHERE E.EMP_ID = T.EMP_ID
ORDER BY T.SUM_DURATION DESC;

-- 사원별 휴가 사용 일 수 그룹핑, 사원아이디, 사원명, 입사일, 급여, 휴가 사용 일수 조회
-- 휴가를 사용하지 않은 사원도 포함해주세요
SELECT EMP_ID, SUM(DURATION)
FROM VACATION
GROUP BY EMP_ID;

SELECT E.EMP_ID, E.EMP_NAME, E.HIRE_DATE, E.SALARY, IFNULL(T.SUM_DURATION, 0) AS '총 휴가 사용 일수'
FROM EMPLOYEE E LEFT JOIN 
	(SELECT EMP_ID, SUM(DURATION) AS SUM_DURATION
	FROM VACATION
	GROUP BY EMP_ID) T
					ON E.EMP_ID = T.EMP_ID
ORDER BY IFNULL(T.SUM_DURATION, 0) DESC;

-- '2015' ~ '2017'년도 입사한 사원들의 휴가 사용 일 수 조회

SELECT EMP_ID
FROM EMPLOYEE
WHERE YEAR(HIRE_DATE) BETWEEN '2015' AND '2017';

SELECT T.EMP_ID, SUM(V.DURATION)
FROM VACATION V, (
	SELECT EMP_ID
	FROM EMPLOYEE
	WHERE YEAR(HIRE_DATE) BETWEEN '2015' AND '2017') T
WHERE V.EMP_ID = T.EMP_ID
GROUP BY V.EMP_ID;

-- 1) 부서별 총급여, 평균급여 조회
SELECT DEPT_ID, SUM(IFNULL(SALARY,0)) SUM, FLOOR(IFNULL(AVG(SALARY), 0)) AVG
FROM EMPLOYEE E
GROUP BY DEPT_ID;

-- 2) 부서 테이블과 조인하여 모든 부서의 총 급여, 평균 급여 출력
SELECT D.DEPT_ID, D.DEPT_NAME, IFNULL(T.SUM, 0) AS SUM, IFNULL(T.AVG, 0) AS AVG
FROM DEPARTMENT D LEFT JOIN (
					SELECT DEPT_ID, SUM(SALARY) SUM, FLOOR(AVG(SALARY)) AVG
					FROM EMPLOYEE
					GROUP BY DEPT_ID ) T
					ON D.DEPT_ID = T.DEPT_ID
ORDER BY T.AVG DESC;

-- 3) 사원테이블 조인하여 사원명, 급여, 부서아이디, 부서명, 총급여, 평균급여 출력
SELECT E.EMP_NAME, E.SALARY, V.DEPT_ID, V.DEPT_NAME, V.SUM, V.AVG
FROM EMPLOYEE E LEFT JOIN (
					SELECT D.DEPT_ID, D.DEPT_NAME, IFNULL(T.SUM, 0) AS SUM, IFNULL(T.AVG, 0) AS AVG
					FROM DEPARTMENT D LEFT JOIN (
										SELECT DEPT_ID, SUM(SALARY) SUM, FLOOR(AVG(SALARY)) AVG
										FROM EMPLOYEE
										GROUP BY DEPT_ID ) T 
                                        ON D.DEPT_ID = T.DEPT_ID ) V
					ON E.DEPT_ID = V.DEPT_ID
ORDER BY DEPT_ID;
    
SELECT *, (SELECT SUM(SALARY) FROM EMPLOYEE WHERE DEPT_ID='SYS')
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';
                        
/******************************************************
	테이블 결과 합치기 : UNION, UNION ALL
    형식> [쿼리1 실행결과]
		 UNION				-- 결과 : 중복제거
		 [쿼리2 실행결과]
         
         [쿼리1 실행결과]
		 UNION ALL			-- 결과 : 중복제거 X
		 [쿼리2 실행결과]
         
	각 쿼리 실행 결과의 컬럼들 이름, 타입이 동일해야함
******************************************************/

-- 영업(MKT), 정보시스템(SYS) 부서의 사원아이디, 사원명, 급여, 부서아이디 조회
SELECT EMP_ID, EMP_NAME, SALARY, DEPT_ID
FROM EMPLOYEE
WHERE DEPT_ID = 'MKT'
UNION
SELECT EMP_ID, EMP_NAME, SALARY, DEPT_ID
FROM EMPLOYEE
WHERE DEPT_ID = 'SYS';

/******************************************************
	논리적인 테이블 : 뷰(VIEW)
    - SQL을 실행하여 생성된 결과를 가상테이블로 정의
    - 생성) CREATE VIEW [VIEW NAME]
			AS [ SQL 정의 ]
	- 삭제) DROP VIEW [VIEW NAME]
	VIEW 생성 시 권한을 할당 받아야 가능 => MYSQL, MARIA 제외 (기본적으로 됨)
******************************************************/
-- 시스템에 생성된 뷰 정보 확인
-- INFORMATION_SCHEMA.VIEWS
SELECT *
FROM INFORMATION_SCHEMA.VIEWS
WHERE TABLE_SCHEMA = 'hrdb2019';

-- 부서 총 급여가 30000 이상인 뷰 정의
CREATE VIEW SUM_SALARY
AS SELECT DEPT_ID, SUM(SALARY) AS SUM
	FROM EMPLOYEE
	GROUP BY DEPT_ID
	HAVING SUM(SALARY) >= 30000;

-- SUM_SALARY 조회
SELECT * FROM SUM_SALARY;

-- SUM_SALARY 뷰 삭제
DROP VIEW SUM_SALARY;


CREATE VIEW EMP_DEPT_SUM
AS
	SELECT E.EMP_NAME, E.SALARY, V.DEPT_ID, V.DEPT_NAME, V.SUM, V.AVG
	FROM EMPLOYEE E LEFT JOIN (
						SELECT D.DEPT_ID, D.DEPT_NAME, IFNULL(T.SUM, 0) AS SUM, IFNULL(T.AVG, 0) AS AVG
						FROM DEPARTMENT D LEFT JOIN (
											SELECT DEPT_ID, SUM(SALARY) SUM, FLOOR(AVG(SALARY)) AVG
											FROM EMPLOYEE
											GROUP BY DEPT_ID ) T 
											ON D.DEPT_ID = T.DEPT_ID ) V
						ON E.DEPT_ID = V.DEPT_ID
	ORDER BY DEPT_ID;
    
SELECT * FROM EMP_DEPT_SUM;

-- EMP_DEPT_SUM 테이블에서 '홍길동' 사원의 정보 조회


-- 사원별 전체 휴가 사용 일수, 부서 아이디, 부서명을 조회한 후 뷰로 생성
create view v_emp_dept
as
select 	e.emp_id,
		e.emp_name,
        e.hire_date,
        e.salary,
        ifnull(v.duration, 0) as duration,
        d.dept_id,
        d.dept_name,
        d.unit_id
	from ( select emp_id, sum(duration) as duration
			from vacation
			group by emp_id ) v right outer join employee e
		 on v.emp_id = e.emp_id
         right outer join department d
         on e.dept_id = d.dept_id;
            
select * from information_schema.views
	where table_schema = 'hrdb2019';

SELECT * FROM v_emp_dept;

-- '제3본부' 소속 부서의 사원들 휴가 사용 일수 조회
SELECT V.EMP_ID, V.EMP_NAME, V.DURATION, U.UNIT_NAME
FROM v_emp_dept V, UNIT U
WHERE V.UNIT_ID = U.UNIT_ID
	AND U.UNIT_NAME = '제3본부';

-- 휴가 사용 일수가 15일 이상 되는 사원들의 사원명, 부서아이디, 부서명, 본부아이디, 본부명
SELECT *
FROM v_emp_dept
WHERE DURATION >= 15;

SELECT V.EMP_NAME, V.DEPT_ID, V.DEPT_NAME, V.UNIT_ID, U.UNIT_NAME, V.DURATION
FROM V_EMP_DEPT V, UNIT U
WHERE V.UNIT_ID = U.UNIT_ID
	AND V.DURATION >= 15
ORDER BY DURATION DESC;


/**********************************************************
	DDL(Data Definition Language) : 생성, 수정, 삭제 -> 테이블 기준
    DML(Data Manipulation Language) : 생성, 읽기, 수정, 삭제 (CRUD) -> 데이터 기준
    C(Create) - Insert
    R(Read) - Select
    U(Update) - Update
    D(Delete) - Delete
    
***********************************************************/
USE HRDB2019;
SHOW TABLES;

/**********************************************************
	DDL(Data Definition Language) : 생성, 수정, 삭제 -> 테이블 기준
    테이블 생성 형식>
		CREATE TABLE [테이블명] (
			컬럼명	데이터타입	  제약조건(널 포함 여부..)
        )
    데이터 타입 정리
    분류			타입			크기/형식			설명			사용 예
    -----------------------------------------------------------
    정수형	  tinyint		1byte		 작은 정수 값	    상태값(0/1)
			  smaillint     2byte		 				카운트
			   int			4byte		  default		일반 정수 값
			  bigint		8byte		  큰 정수 값		pk, 주문번호..
              
	실수형	  float			4byte		  부동 소수점		거의 사용 안함
			  double		8byte		  default		통계 수치
		
	문자형      char			고정길이	   빠른공간확보/공간낭비	코드값
    문자형      varchar		가변길이		가장 많이 사용		이름, 주소, ...
    텍스트	  text			~ 64kB		긴 문장 저장		게시글
			  longtext		~ 4GB		초대형 텍스트		로그..
              
	바이너리	  blob			~64, ~4GB	이미지파일, 파일 저장
    
    날짜		  date 			yyyy-mm-dd	    날짜  		생일
			  datetime		date + 시분초	  날짜, 시간		
              
	JSON	  JSON			JSON 구조						API
***********************************************************/
DESC EMPLOYEE;

-- EMP 테이블 생성
-- EMP_ID(사번) : 4, E_NAME(사원명) : 5, HIRE_DATE(입사일) : DATE, SALARY(급여) : 4
CREATE TABLE EMP (
	EMP_ID		CHAR(4),			-- 0001, 0002
	E_NAME		VARCHAR(5),
    HIRE_DATE	DATE,
    SALARY		INT
);

SHOW TABLES;
DESC EMP;

/**********************************************************
	테이블 삭제
    형식> DROP TABLE [테이블명];
***********************************************************/
SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'EMP';

DROP TABLE EMP;

/**********************************************************
	테이블 복제 (CAS)
    형식> CREATE TABLE [테이블명]
			AS [서브쿼리];
***********************************************************/
-- 2016년도 입사한 사원의 정보를 조회하여 EMPLOYEE_2016 테이블 생성
CREATE TABLE EMPLOYEE_2016
AS 
	SELECT *
	FROM EMPLOYEE
	WHERE YEAR(HIRE_DATE) = '2016';
    
SHOW TABLES;

SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'EMPLOYEE_2016';

DESC EMPLOYEE;
DESC EMPLOYEE_2016;		-- 복제본은 원본의 KEY 제약사항(CONSTRAINT)을 복제하지 않음

-- EMPLOYEE_DEPARTMENT 테이블 생성
-- EMPLOYEE + DEPARTMENT 테이블 조인, DEPT_ID는 하나만 저장
DESC DEPARTMENT;
SELECT EMP_ID, EMP_NAME, ENG_NAME, GENDER, HIRE_DATE, RETIRE_DATE, E.DEPT_ID, PHONE, EMAIL, SALARY, DEPT_NAME, UNIT_ID, START_DATE
FROM EMPLOYEE E, DEPARTMENT D
WHERE E.DEPT_ID = D.DEPT_ID;

CREATE TABLE EMPLOYEE_DEPARTMENT
AS
	SELECT EMP_ID, EMP_NAME, ENG_NAME, GENDER, HIRE_DATE, RETIRE_DATE, E.DEPT_ID, PHONE, EMAIL, SALARY, DEPT_NAME, UNIT_ID, START_DATE
	FROM EMPLOYEE E, DEPARTMENT D
	WHERE E.DEPT_ID = D.DEPT_ID;
    
SELECT * FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_NAME = 'EMPLOYEE_DEPARTMENT';

-- 테이블 구조만 복제할 때 사용
SELECT * FROM EMPLOYEE
WHERE 1 = 0;

CREATE TABLE EMP
AS
	SELECT * FROM EMPLOYEE
	WHERE 1 = 0;

/**********************************************************
	데이터 생성(CREATE :: INSERT)
    형식> INSERT INTO [테이블명] (컬럼리스트...)   -- 컬럼리스트 생략 가능
			VALUES(데이터1, 데이터2, ..)
***********************************************************/
INSERT INTO EMP (EMP_ID, EMP_NAME, ENG_NAME, GENDER, HIRE_DATE, RETIRE_DATE, DEPT_ID, PHONE, EMAIL, SALARY)
	VALUES ('S0001', '홍길동', NULL, 'M', CURDATE(), NULL, 'SYS', '010-1234-1324', 'hong@naever.com', NULL);

SELECT * FROM EMP;

/**********************************************************
	DDL - 테이블의 데이터 절삭(TRUNCATE), 데이터가 영구적으로 삭제
    형식> TRUNCATE TABLE [테이블명];
***********************************************************/
SELECT * FROM EMP;
TRUNCATE TABLE EMP;
DROP TABLE EMP;


-- EMP 생성 : EID(CHAR, 4), ENAME(VARCHAR,5), GENDER(CHAR,1), HIRE_DATE(DATETIME), SALARY(INT)
-- EID, ENAME, GENDER 컬럼은 NULL을 허용하지 않음
CREATE TABLE EMP (
	EID 		CHAR(4) 	NOT NULL,
    ENAME 		VARCHAR(5) 	NOT NULL,
    GENDER 		CHAR(1) 	NOT NULL,
    HIRE_DATE 	DATETIME,
    SALARY 		INT
) ;

DESC EMP;

INSERT INTO EMP(EID, ENAME, GENDER, HIRE_DATE, SALARY)
	VALUES ('S001', '홍길동', 'M', NULL, NULL);
    
INSERT INTO EMP(EID, ENAME, GENDER)
	VALUES ('S002', '이순신', 'M');
    
INSERT INTO EMP(GENDER, ENAME, EID, HIRE_DATE)
	VALUES ('M', '김유신', 'S003', CURDATE());
    
INSERT INTO EMP(GENDER, ENAME, EID, HIRE_DATE, SALARY)
	VALUES ('F', '홍길순', 'S004', SYSDATE(), 1000);
    
SELECT * FROM EMP;

/**********************************************************
	자동 번호 생성기 : AUTO_INCREMENT
    - 테이블 생성시 옵션 자리에 기술, PK 컬럼에 주로 사용
    - 반드시 PK / UNIQUE 제약 조건 같이 사용
    형식> CREATE TABLE [테이블명] (
		컬럼명		데이터타입		AUTO_INCREMENT ...
    )
***********************************************************/

-- EMP2 생성 : EID(INT, 자동번호생성), ENAME(VARCHAR,5), GENDER(CHAR,1), HIRE_DATE(DATETIME), SALARY(INT)
-- EID, ENAME, GENDER 컬럼은 NULL을 허용하지 않음 : NOT NULL

CREATE TABLE EMP2 (
	EID 		INT 		AUTO_INCREMENT,
    ENAME 		VARCHAR(5) 	NOT NULL,
    GENDER 		CHAR(1) 	NOT NULL,
    HIRE_DATE 	DATETIME,
    SALARY 		INT,
    
    PRIMARY KEY (EID)
) ;

DESC EMP2;


INSERT INTO EMP2 (ENAME, GENDER) VALUES ('홍길동', 'M');
INSERT INTO EMP2 (ENAME, GENDER, HIRE_DATE) VALUES ('이순신', 'M', NOW());
INSERT INTO EMP2 (ENAME, GENDER, HIRE_DATE, SALARY) VALUES ('김유신', 'M', NOW(), 1500);

SELECT * FROM EMP2;

/**********************************************************
		DDL - 테이블 변경 : ALTER TABLE
        형식> ALTER TABLE [테이블명]
				ADD COLUMN [NEW COLUMN, 데이터 타입]	-- NULL 허용
                MODIFY COLUMN [MODIFY COLUMN, 데이터타입..]		-- 크기 고려
                DROP COLUMN [DROP COLUMN]
***********************************************************/
SHOW TABLES;
DESC EMP;

-- EMP 테이블에 phone(CHAR,13,'-'포함) 컬럼 추가
ALTER TABLE EMP
	ADD COLUMN PHONE CHAR(13) ;
    
-- EMP 테이블의 컬럼의 크기를 20으로 변경
ALTER TABLE EMP
	MODIFY COLUMN PHONE CHAR(20);
    
SELECT * FROM EMP;

-- ENAME 컬럼의 크기를 VARCHAR(2)로 변경
-- 크기를 작게 변경하는 경우 데이터 유실 발생하므로 -> 에러
ALTER TABLE EMP
	MODIFY COLUMN ENAME VARCHAR(2);


/**********************************************************
		데이터 수정 : UPDATE
        형식> UPDATE [테이블명]
				SET [컬럼명=NEW데이터,...]
                WHERE [조건절]
		!! MYSQL은 UPDATE 권한 변경 후 진행
        => SET SQL_SAFE_UPDATES = 0(허용) / 1(불가);
***********************************************************/
SELECT * FROM EMP;

-- S001 사번의 폰번호 업데이트, 업데이트 모드 허용으로 수정
SET SQL_SAFE_UPDATES = 0;

UPDATE EMP
	SET PHONE = '010-1234-5678'
    WHERE EID = 'S001';

-- 모든 사원의 폰번호를 '010-1111-1234' 수정
UPDATE EMP
	SET PHONE = '010-1111-1234';

-- PHONE 컬럼의 NOT NULL 제약 추가
ALTER TABLE EMP
	MODIFY COLUMN PHONE CHAR(20) NOT NULL;

-- EMP 테이블에 EMAIL 컬럼 추가 후 NOT NULL 제약 정의
-- 1) 컬럼 추가 시 NULL 허용
-- 2) UPDATE 명령으로 기존 데이터 추가
-- 3) NOT NULL 제약 정의
ALTER TABLE EMP
	ADD COLUMN EMAIL VARCHAR(20);
    
UPDATE EMP
	SET EMAIL = 'sadaf1@naver.com';

ALTER TABLE EMP
	MODIFY EMAIL VARCHAR(20) NOT NULL;

DESC EMP;

-- 
CREATE TABLE COPY_EMP
AS
	SELECT * FROM EMPLOYEE;

SHOW TABLES;
DESC COPY_EMP;
SELECT * FROM COPY_EMP;

-- 홍길동 사원의 급여를 6000으로 수정
UPDATE COPY_EMP
	SET SALARY = 6000
    WHERE EMP_NAME = '홍길동';
    
-- 안경태 사원의 입사일을 '20210705'로 수정
UPDATE COPY_EMP
	SET HIRE_DATE = '20210705'
    WHERE EMP_NAME = '안경태';
    
-- (1) EMP2 테이블에 RETIRE_DATE 컬럼 추가 : DATE, NULL 허용
-- (2) 기존 NULL 데이터를 현재날짜로 변경
-- (3) RETIRE_DATE를 NOT NULL 제약 정의

ALTER TABLE EMP2
	ADD COLUMN RETIRE_DATE DATETIME;
    
UPDATE EMP2
	SET RETIRE_DATE = SYSDATE();
    
ALTER TABLE EMP2
	MODIFY COLUMN RETIRE_DATE DATETIME NOT NULL;

SELECT * FROM EMP2;

-- 정보시스템 부서의 모든 사원 급여를 20% 증가
SELECT * FROM COPY_EMP WHERE DEPT_ID = 'SYS';

UPDATE COPY_EMP
	SET SALARY = SALARY + SALARY * 0.2
    WHERE DEPT_ID = (SELECT DEPT_ID FROM DEPARTMENT WHERE DEPT_NAME = '정보시스템');
    
-- 'S0003'인 강우동 사원의 영어이름을 'KANG', 입사일은 현재날짜, 부서를 MKT로 변경
SELECT * FROM COPY_EMP WHERE EMP_ID = 'S0003';

UPDATE COPY_EMP
	SET ENG_NAME = 'KANG', HIRE_DATE = CURDATE(), DEPT_ID = 'MKT'
    WHERE EMP_ID = 'S0003';
    
-- 트랜잭션별 업데이트 정의
-- 트랜잭션 관리 명령어 DTL : COMMIT(작업완료), ROLLBACK(작업복원)
-- DML 명령어에 영향을 줌, DDL은 무조건 AUTO COMMIT
SELECT @@AUTOCOMMIT;		-- 현재 트랜잭션 방식 확인 1:시스템에서 자동 트랜잭션 관리(바로 COMMIT)
SET AUTOCOMMIT = 0;			-- 트랜잭션 관리 방식을 수동으로 전환

SELECT * FROM EMP;

COMMIT;     -- 이전 단계 까지를 COMMIT / 새로운 TRANSACTION 시작

-- 홍길동의 급여를 3000으로 수정
UPDATE EMP SET SALARY = 3000 WHERE EID ='S002';		-- 물리적 DB에 반영되기 전
ROLLBACK;


/**********************************************************
		데이터 삭제 : DELETE
        형식> DELETE FROM [테이블명]
				WHERE [조건절]
***********************************************************/
-- EMP 테이블의 이순신, 홍길동 사원 삭제
DELETE FROM EMP
WHERE ENAME IN ('이순신', '홍길동');

SELECT * FROM EMP;
ROLLBACK;
COMMIT;

-- EMP 테이블의 모든 사원 삭제, TRUNCATE 명령어 사용
TRUNCATE EMP;
SELECT * FROM EMP;

SET AUTOCOMMIT = 1;







    
    
    