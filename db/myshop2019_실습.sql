/******************************************************
		실습 데이터베이스 연결 : myshop2019
		실습 내용 - 기본적인 데이터 조회 	 
******************************************************/
show databases;
use myshop2019;
select database();
show tables;

-- Q01) customer 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM CUSTOMER;
DESC CUSTOMER;
-- Q02) employee 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM EMPLOYEE;
DESC EMPLOYEE;
-- Q03) product 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM PRODUCT;
DESC PRODUCT;
-- Q04) order_header 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM order_header;
DESC order_header;
-- Q05) order_detail 테이블 모든 행과 열을 조회하고 어떤 열들이 있는지, 데이터 형식은 어떻게 되는지 살펴보세요.
SELECT * FROM order_detail;
DESC order_detail;
-- Q06) 모든 고객의 아이디, 이름, 지역, 성별, 이메일, 전화번호를 조회하세요.
SELECT CUSTOMER_ID 아이디, CUSTOMER_NAME 이름, CITY 지역, GENDER 성별, EMAIL 이메일, PHONE 전화번호
FROM CUSTOMER;
-- Q07) 모든 직원의 이름, 사원번호, 성별, 입사일, 전화번호를 조회하세요.
SELECT EMPLOYEE_NAME 이름, EMPLOYEE_ID 사원번호, GENDER 성별, HIRE_DATE 입사일, PHONE 전화번호
FROM EMPLOYEE;
-- Q08) 이름이 '홍길동'인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE CUSTOMER_NAME = '홍길동';
-- Q09) 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE GENDER = 'F';
-- Q10) '울산' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE CITY = '울산';
-- Q11) 포인트가 500,000 이상인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE POINT >= 500000
ORDER BY POINT DESC;

-- Q12) 이름에 공백이 들어간 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.            ❌❌❌❌❌❌❌❌❌❌❌
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE CUSTOMER_NAME LIKE '% %';

-- Q13) 전화번호가 010으로 시작하지 않는 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE PHONE NOT IN (SELECT PHONE FROM CUSTOMER WHERE PHONE LIKE '010-%');

SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE PHONE NOT LIKE '010-%';

-- Q14) 포인트가 500,000 이상 '서울' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE POINT >= 500000 AND CITY = '서울'
ORDER BY POINT DESC;
-- Q15) 포인트가 500,000 이상인 '서울' 이외 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE POINT >= 500000 AND CITY != '서울'
ORDER BY CITY;

-- Q16) 포인트가 400,000 이상인 '서울' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE POINT >= 400000 AND CITY = '서울' AND GENDER = 'M'
ORDER BY POINT DESC;

-- Q17) '강릉' 또는 '원주' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE CITY IN ('강릉', '원주');

-- Q18) '서울' 또는 '부산' 또는 '제주' 또는 '인천' 지역 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE CITY IN ('서울', '부산', '제주', '인천')
ORDER BY CITY;

-- Q19) 포인트가 400,000 이상, 500,000 이하인 고객의 이름, 아이디, 성별, 지역, 전화번호, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, POINT 포인트
FROM CUSTOMER
WHERE POINT BETWEEN 400000 AND 500000;

-- Q20) 1990년에 출생한 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, BIRTH_DATE 생일, POINT 포인트
FROM CUSTOMER
WHERE BIRTH_DATE LIKE '1990-%';

-- Q21) 1990년에 출생한 여자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, BIRTH_DATE 생일, POINT 포인트
FROM CUSTOMER
WHERE BIRTH_DATE LIKE '1990-%' AND GENDER = 'F';

-- Q22) 1990년에 출생한 '대구' 또는 '경주' 지역 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
SELECT CUSTOMER_NAME 이름, CUSTOMER_ID 아이디, GENDER 성별, CITY 지역, PHONE 전화번호, BIRTH_DATE 생일, POINT 포인트
FROM CUSTOMER
WHERE BIRTH_DATE LIKE '1990-%' AND GENDER = 'M' AND CITY IN ('대구', '경주');

-- Q23) 1990년에 출생한 남자 고객의 이름, 아이디, 성별, 지역, 전화번호, 생일, 포인트를 조회하세요.
--      단, 홍길동(gildong) 형태로 이름과 아이디를 묶어서 조회하세요.						❌❌❌❌❌❌❌❌❌❌❌
SELECT CONCAT( CUSTOMER_NAME, '(', CUSTOMER_ID, ')' ) AS 이름, GENDER 성별, CITY 지역, PHONE 전화번호, BIRTH_DATE 생일, POINT 포인트
FROM CUSTOMER
WHERE BIRTH_DATE LIKE '1990-%' AND GENDER = 'M';

-- Q24) 근무중인 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_NAME 이름, EMPLOYEE_ID 사원번호, GENDER 성별, PHONE 전화번호, HIRE_DATE 입사일
FROM EMPLOYEE
WHERE RETIRE_DATE IS NULL;

-- Q25) 근무중인 남자 직원의 이름, 사원번호, 성별, 전화번호, 입사일를 조회하세요.
SELECT EMPLOYEE_NAME 이름, EMPLOYEE_ID 사원번호, GENDER 성별, PHONE 전화번호, HIRE_DATE 입사일
FROM EMPLOYEE
WHERE RETIRE_DATE IS NULL AND GENDER='M';

-- Q26) 퇴사한 직원의 이름, 사원번호, 성별, 전화번호, 입사일, 퇴사일를 조회하세요.
SELECT EMPLOYEE_NAME 이름, EMPLOYEE_ID 사원번호, GENDER 성별, PHONE 전화번호, HIRE_DATE 입사일, RETIRE_DATE 퇴사일
FROM EMPLOYEE
WHERE RETIRE_DATE IS NOT NULL;

-- Q28) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 고객아이디를 기준으로 오름차순 정렬해서 조회하세요.
SELECT ORDER_ID 주문번호, CUSTOMER_ID 고객아이디, EMPLOYEE_ID 사원번호, ORDER_DATE 주문일시, SUB_TOTAL 소계, DELIVERY_FEE 배송비, TOTAL_DUE 전체금액
FROM ORDER_HEADER
WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
ORDER BY CUSTOMER_ID;

-- Q29) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 전체금액을 기준으로 내림차순 정렬해서 조회하세요.
SELECT ORDER_ID 주문번호, CUSTOMER_ID 고객아이디, EMPLOYEE_ID 사원번호, ORDER_DATE 주문일시, SUB_TOTAL 소계, DELIVERY_FEE 배송비, TOTAL_DUE 전체금액
FROM ORDER_HEADER
WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
ORDER BY TOTAL_DUE DESC;


-- Q30) 2019-01-01 ~ 2019-01-07 기간 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 소계, 배송비, 전체금액을 조회하세요.
--      단, 사원번호를 기준으로 오름차순, 같은 사원번호는 주문일시를 기준으로 내림차순 정렬해서 조회하세요.
SELECT ORDER_ID 주문번호, CUSTOMER_ID 고객아이디, EMPLOYEE_ID 사원번호, ORDER_DATE 주문일시, SUB_TOTAL 소계, DELIVERY_FEE 배송비, TOTAL_DUE 전체금액
FROM ORDER_HEADER
WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-07'
ORDER BY EMPLOYEE_ID, ORDER_DATE DESC;

/**
	그룹함수
**/
/** customer 테이블 사용 **/
DESC CUSTOMER;
-- Q01) 고객의 포인트 합을 조회하세요.
SELECT SUM(POINT)
FROM CUSTOMER;

-- Q02) '서울' 지역 고객의 포인트 합을 조회하세요.
SELECT SUM(POINT)
FROM CUSTOMER
WHERE CITY = '서울';

-- Q03) '서울' 지역 고객의 수를 조회하세요.
SELECT COUNT(CUSTOMER_ID)
FROM CUSTOMER
WHERE CITY = '서울';

-- Q04) '서울' 지역 고객의 포인트 합과 평균을 조회하세요.
SELECT SUM(POINT) AS 포인트합, AVG(POINT) 포인트평균
FROM CUSTOMER
WHERE CITY = '서울';

-- Q05) '서울' 지역 고객의 포인트 합, 평균, 최댓값, 최솟값을 조회하세요.
SELECT SUM(POINT) AS 포인트합, AVG(POINT) 포인트평균, MAX(POINT) 최대값, MIN(POINT) 최솟값
FROM CUSTOMER
WHERE CITY = '서울';

-- Q06) 남녀별 고객의 수를 조회하세요.
SELECT GENDER, COUNT(CUSTOMER_ID) AS 고객수
FROM CUSTOMER
GROUP BY GENDER;

-- Q07) 지역별 고객의 수를 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, COUNT(CUSTOMER_ID) AS 고객수
FROM CUSTOMER
GROUP BY CITY
ORDER BY CITY;
 
-- Q08) 지역별 고객의 수를 조회하세요.
--      단, 고객의 수가 10명 이상인 행만 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, COUNT(CUSTOMER_ID) AS 고객수
FROM CUSTOMER
GROUP BY CITY
HAVING COUNT(CUSTOMER_ID) >=10;
    
-- Q09) 남녀별 포인트 합을 조회하세요.
SELECT GENDER, SUM(POINT)
FROM CUSTOMER
GROUP BY GENDER;
    
-- Q10) 지역별 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, SUM(POINT)
FROM CUSTOMER
GROUP BY CITY
ORDER BY CITY;    

-- Q11) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합이 1,000,000 이상인 행만 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
SELECT CITY, SUM(POINT) AS 포인트합
FROM CUSTOMER
GROUP BY CITY
HAVING SUM(POINT)>=100000
ORDER BY 포인트합 DESC;
      
-- Q12) 지역별 포인트 합을 조회하세요.
--      단, 포인트 합을 기준으로 내림차순 정렬해서 조회하세요.
SELECT CITY, SUM(POINT) AS 포인트합
FROM CUSTOMER
GROUP BY CITY
ORDER BY 포인트합 DESC;   

-- Q13) 지역별 고객의 수, 포인트 합을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, COUNT(CUSTOMER_ID) 고객수, SUM(POINT) 포인트합
FROM CUSTOMER
GROUP BY CITY
ORDER BY CITY;

-- Q14) 지역별 포인트 합, 포인트 평균을 조회하세요.
--      단, 포인트가 NULL이 아닌 고객을 대상으로 하며, 지역 이름을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, SUM(POINT) 포인트합, AVG(POINT) 포인트평균
FROM CUSTOMER
WHERE POINT IS NOT NULL
GROUP BY CITY
ORDER BY CITY;

-- Q15) '서울', '부산', '대구' 지역 고객의 지역별, 남녀별 포인트 합과 평균을 조회하세요.
--      단, 지역 이름을 기준으로 오름차순, 같은 지역은 성별을 기준으로 오름차순 정렬해서 조회하세요.
SELECT CITY, GENDER, SUM(POINT) 포인트합, AVG(POINT) 포인트평균
FROM CUSTOMER
WHERE CITY IN ('서울', '부산', '대구')
GROUP BY CITY, GENDER
ORDER BY CITY, GENDER;

/** order_header 테이블 사용 **/
DESC ORDER_HEADER;
-- Q16) 2019년 1월 주문에 대하여 고객아이디별 전체금액 합을 조회하세요.
SELECT CUSTOMER_ID 고객아이디, SUM(TOTAL_DUE) 전체금액합
FROM ORDER_HEADER
WHERE ORDER_DATE BETWEEN '2019-01-01' AND '2019-01-31'
GROUP BY CUSTOMER_ID;

-- Q17) 주문연도별 전체금액 합계를 조회하세요.
SELECT YEAR(ORDER_DATE) 주문연도, SUM(TOTAL_DUE) 전체금액합
FROM ORDER_HEADER
GROUP BY YEAR(ORDER_DATE);

-- Q18) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합을 조회하세요.
SELECT YEAR(ORDER_DATE) 연, MONTH(ORDER_DATE) 월, FORMAT(SUM(TOTAL_DUE), 0) 전체금액합
FROM ORDER_HEADER
WHERE YEAR(ORDER_DATE) = '2019'
	AND MONTH(ORDER_DATE) BETWEEN '1' AND '6'
GROUP BY YEAR(ORDER_DATE), MONTH(ORDER_DATE);

-- Q19) 2019.01 ~ 2019.06 기간 주문에 대하여 주문연도별, 주문월별 전체금액 합과 평균을 조회하세요.
SELECT YEAR(ORDER_DATE) 연, MONTH(ORDER_DATE) 월, FORMAT(SUM(TOTAL_DUE), 0) 전체금액합, FORMAT(AVG(TOTAL_DUE), 0) 평균
FROM ORDER_HEADER
WHERE YEAR(ORDER_DATE) = '2019'
	AND MONTH(ORDER_DATE) BETWEEN '1' AND '6'
GROUP BY YEAR(ORDER_DATE), MONTH(ORDER_DATE);


-- Q20) 주문연도별, 주문월별 전체금액 합과 평균을 조회하고, rollup 함수를 이용하여 소계와 총계를 출력해주세요.
SELECT IF(GROUPING(YEAR), '연도별 총합계', IFNULL(YEAR, '-')) 주문연도,
		IF(GROUPING(MONTH), '월별 총합계', IFNULL(MONTH, '-')) 주문월,
        SUM(TOTAL_DUE),
        AVG(TOTAL_DUE)
FROM (SELECT LEFT(ORDER_DATE, 4) YEAR,
			SUBSTRING(ORDER_DATE, 6,2) MONTH,
			TOTAL_DUE
        FROM ORDER_HEADER ) T
GROUP BY YEAR, MONTH WITH ROLLUP;

SELECT YEAR(ORDER_DATE) 연, MONTH(ORDER_DATE) 월, SUM(TOTAL_DUE) 합, AVG(TOTAL_DUE) 평균
FROM ORDER_HEADER
GROUP BY YEAR(ORDER_DATE), MONTH(ORDER_DATE) WITH ROLLUP;

/**
	테이블 조인 : 기본 SQL 방식, ANSI SQL
*/
-- Q01) 전체금액이 8,500,000 이상인 주문의 주문번호, 고객아이디, 사원번호, 주문일시, 전체금액을 조회하세요.
SELECT ORDER_ID, CUSTOMER_ID, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER
WHERE TOTAL_DUE >= 8500000;

-- Q02) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름도 같이 조회되게 수정하세요.
DESC CUSTOMER;

SELECT O.ORDER_ID, O.CUSTOMER_ID, C.CUSTOMER_NAME, O.EMPLOYEE_ID, O.ORDER_DATE, O.TOTAL_DUE
FROM ORDER_HEADER O JOIN CUSTOMER C
WHERE O.CUSTOMER_ID = C.CUSTOMER_ID
	AND TOTAL_DUE >= 8500000;

-- Q03) Q01 쿼리를 복사해 붙여 넣은 후 직원이름도 같이 조회되게 수정하세요.
DESC EMPLOYEE;

SELECT ORDER_ID, CUSTOMER_ID, O.EMPLOYEE_ID, E.EMPLOYEE_NAME, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER O JOIN EMPLOYEE E
WHERE O.EMPLOYEE_ID = E.EMPLOYEE_ID AND TOTAL_DUE >= 8500000;
	
-- Q04) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 고객이름, 직원이름도 같이 조회되게 수정하세요.
SELECT ORDER_ID, O.CUSTOMER_ID, C.CUSTOMER_NAME, O.EMPLOYEE_ID, E.EMPLOYEE_NAME, ORDER_DATE, TOTAL_DUE
FROM ORDER_HEADER O JOIN EMPLOYEE E JOIN CUSTOMER C
WHERE O.EMPLOYEE_ID = E.EMPLOYEE_ID AND O.CUSTOMER_ID = C.CUSTOMER_ID AND TOTAL_DUE >= 8500000;

SELECT ORDER_ID, T.CUSTOMER_ID, T.CUSTOMER_NAME, T.EMPLOYEE_ID, E.EMPLOYEE_NAME, ORDER_DATE, TOTAL_DUE
FROM ( SELECT ORDER_ID, O.CUSTOMER_ID, C.CUSTOMER_NAME, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE
		FROM ORDER_HEADER O JOIN CUSTOMER C
		WHERE O.CUSTOMER_ID = C.CUSTOMER_ID ) T JOIN EMPLOYEE E
WHERE T.EMPLOYEE_ID = E.EMPLOYEE_ID AND TOTAL_DUE >= 8500000;

-- Q05) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 고객만 조회되게 수정하세요.
DESC CUSTOMER;
DESC ORDER_HEADER;

SELECT ORDER_ID, T.CUSTOMER_ID, T.CUSTOMER_NAME, T.EMPLOYEE_ID, E.EMPLOYEE_NAME, ORDER_DATE, TOTAL_DUE, CITY
FROM ( SELECT ORDER_ID, O.CUSTOMER_ID, C.CUSTOMER_NAME, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE, CITY
		FROM ORDER_HEADER O JOIN CUSTOMER C
		WHERE O.CUSTOMER_ID = C.CUSTOMER_ID AND CITY = '서울' AND TOTAL_DUE >= 8500000) T JOIN EMPLOYEE E
WHERE T.EMPLOYEE_ID = E.EMPLOYEE_ID;

-- Q06) 위에서 작성한 쿼리문을 복사해 붙여 넣은 후 전체금액이 8,500,000 이상인 '서울' 지역 '남자' 고객만 조회되게 수정하세요.
SELECT ORDER_ID, T.CUSTOMER_ID, T.CUSTOMER_NAME, T.EMPLOYEE_ID, E.EMPLOYEE_NAME, ORDER_DATE, TOTAL_DUE, CITY, T.GENDER
FROM ( SELECT ORDER_ID, O.CUSTOMER_ID, C.CUSTOMER_NAME, EMPLOYEE_ID, ORDER_DATE, TOTAL_DUE, CITY, C.GENDER
		FROM ORDER_HEADER O JOIN CUSTOMER C
		WHERE O.CUSTOMER_ID = C.CUSTOMER_ID AND CITY = '서울' AND TOTAL_DUE >= 8500000 AND C.GENDER='M') T JOIN EMPLOYEE E
WHERE T.EMPLOYEE_ID = E.EMPLOYEE_ID;

-- Q07) 주문수량이 30개 이상인 주문의 주문번호, 상품코드, 주문수량, 단가, 지불금액을 조회하세요.
DESC ORDER_HEADER;
DESC ORDER_DETAIL;
SHOW TABLES;
SELECT * FROM ORDER_DETAIL;

SELECT H.ORDER_ID, D.PRODUCT_ID, D.ORDER_QTY, D.UNIT_PRICE, H.TOTAL_DUE
FROM ORDER_HEADER H JOIN ORDER_DETAIL D
WHERE H.ORDER_ID = D.ORDER_ID AND D.ORDER_QTY >= 30;

-- Q08) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 상품이름도 같이 조회되도록 수정하세요.
DESC PRODUCT;

SELECT H.ORDER_ID, D.PRODUCT_ID, P.PRODUCT_NAME, D.ORDER_QTY, D.UNIT_PRICE, H.TOTAL_DUE
FROM ORDER_HEADER H JOIN ORDER_DETAIL D JOIN PRODUCT P
WHERE H.ORDER_ID = D.ORDER_ID AND D.PRODUCT_ID = P.PRODUCT_ID AND D.ORDER_QTY >= 30;

-- Q09) 상품코드, 상품이름, 소분류아이디를 조회하세요.
SELECT *
FROM PRODUCT;

-- Q10) 위에서 작성한 쿼리문을 복사해서 붙여 넣은 후 소분류이름, 대분류아이디가 조회되게 수정하세요.
SHOW TABLES;
SELECT * FROM SUB_CATEGORY;

SELECT P.PRODUCT_ID, P.PRODUCT_NAME, P.SUB_CATEGORY_ID, S.SUB_CATEGORY_NAME, CATEGORY_ID
FROM PRODUCT P JOIN SUB_CATEGORY S
WHERE P.SUB_CATEGORY_ID = S.SUB_CATEGORY_ID;

-- Q11) 다정한 사원이 2019년에 주문한 상품명을 모두 출력해주세요.
DESC ORDER_HEADER;
DESC ORDER_DETAIL;
DESC PRODUCT;
DESC EMPLOYEE;

SELECT DISTINCT PRODUCT_NAME		-- 167 ROWS
FROM EMPLOYEE E, ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
WHERE E.EMPLOYEE_ID = OH.EMPLOYEE_ID
	AND OH.ORDER_ID = OD.ORDER_ID
    AND OD.PRODUCT_ID = P.PRODUCT_ID
	AND E.EMPLOYEE_NAME = '다정한' 
    AND YEAR(OH.ORDER_DATE) = '2019';


SELECT PRODUCT_NAME		-- 41 ROWS / 최종
FROM PRODUCT
WHERE PRODUCT_ID IN (
	SELECT PRODUCT_ID
	FROM ORDER_DETAIL
	WHERE ORDER_ID IN (
		SELECT ORDER_ID
		FROM ORDER_HEADER O JOIN EMPLOYEE E
		WHERE O.EMPLOYEE_ID = E.EMPLOYEE_ID AND E.EMPLOYEE_NAME = '다정한' AND YEAR(O.ORDER_DATE) = '2019'
    )
);


SELECT PRODUCT_ID			-- 167 ROWS
FROM ORDER_DETAIL
WHERE ORDER_ID IN (
	SELECT ORDER_ID
	FROM ORDER_HEADER O JOIN EMPLOYEE E
	WHERE O.EMPLOYEE_ID = E.EMPLOYEE_ID AND E.EMPLOYEE_NAME = '다정한' AND YEAR(O.ORDER_DATE) = '2019'
);

SELECT ORDER_ID       -- 60 ROWS
FROM ORDER_HEADER O JOIN EMPLOYEE E
WHERE O.EMPLOYEE_ID = E.EMPLOYEE_ID AND E.EMPLOYEE_NAME = '다정한' AND YEAR(O.ORDER_DATE) = '2019';


-- Q12) 청소기를 구입한 고객아이디, 사원번호, 주문번호, 주문일시를 조회하세요.
DESC PRODUCT;
DESC ORDER_DETAIL;

SELECT OH.CUSTOMER_ID, OH.EMPLOYEE_ID, OH.ORDER_ID, OH.ORDER_DATE
FROM ORDER_HEADER OH, ORDER_DETAIL OD, PRODUCT P
WHERE OD.PRODUCT_ID = P.PRODUCT_ID AND OH.ORDER_ID = OD.ORDER_ID
	AND P.PRODUCT_NAME = '세탁기';

/**
	서브쿼리
*/
-- Q13) 'mtkim', 'odoh', 'soyoukim', 'winterkim' 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.    
-- Q14) '전주' 지역 고객의 아이디를 조회하세요.    
-- Q15) 위 두 쿼리문을 조합해서 하위 쿼리를 사용해 '전주' 지역 고객 주문의 주문번호, 고객아이디, 주문일시, 전체금액을 조회하세요.
-- Q16) 고객의 포인트 최댓값을 조회하세요.
-- Q17) 하위 쿼리를 사용해 가장 포인트가 많은 고객의 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q18) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하세요.
-- Q19) 하위 쿼리를 사용해 홍길동(gdhong) 고객과 같은 지역의 고객 이름, 아이디, 지역, 등록일, 포인트를 조회하세요.
--      단, 고객 이름을 기준으로 오름차순 정렬해서 조회하세요.
-- Q20) 하위 쿼리를 사용해 홍길동(gdhong) 고객보다 포인트가 많은 고객 이름, 아이디, 등록일, 포인트를 조회하고, 행번호를 추가하여 출력하세요.