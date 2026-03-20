/**
 * block 단위로 실행되는 lexical environment
 */

{
    let a = 10;      // 전역 변수(Global Variable)
    console.log(a);

    {
        let a = 20;         // 지역 변수 (Local Variable)
        console.log(a);

        {
            let a = 30;
            console.log(a);
        }       // // 지역 스코프 : Local block scope
        
        console.log(a);
    }       // 지역 스코프 : Local block scope
    
    
    console.log(a);
}  // 전역 스코프 : Global block scope