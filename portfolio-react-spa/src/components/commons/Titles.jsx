/**
 * Content의 타이틀 관련 컴포넌트 모음
 */
export function Description({ description }) {
    return(
        <p className="description">{description}</p>
    )
}

export function TitleDescription({ TitleDescription }) {
    return(
        <p>{TitleDescription}</p>
    )
}

export function SubTitle({ subTitle }) {
    return(
        <p className="description">{subTitle}</p>
    )
}

export function Title({ title }) {
    return(
        <h2 className="title">{title}</h2>
    )
}

export function HomeMainTitle ({ children, style }) {
    return (
        <h2 className={style}>
            {children}
        </h2>
    )
}