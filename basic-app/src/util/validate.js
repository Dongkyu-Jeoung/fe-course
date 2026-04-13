/**
 * UserInfo 컴포넌트 폼 체크 함수
 */

export function validateUserInfo(refs) {
    if(refs.nameRef.current.value.trim() === '') {
        alert('이름!');
        refs.nameRef.current.focus();
        return false;
    } else if (refs.ageRef.current.value.trim() === '') {
        alert('나이');
        refs.ageRef.current.focus();
        return false;
    } else if (refs.addressRef.current.value.trim() === '') {
        alert('주소');
        refs.addressRef.current.focus();
        return false;
    } else return true;
}

export const validateUserInfo2 = (refs) => {
    if(refs.current.name.value === "") {
        refs.current.name.focus();
        return false;
    } else if(refs.current.age.value === "") {
        refs.current.age.focus();
        return false;
    } else if(refs.current.address.value === "") {
        refs.current.address.focus();
        return false;
    } else if(refs.current.job.value === "") {
        refs.current.job.focus();
        return false;
    } 
    return true;
}