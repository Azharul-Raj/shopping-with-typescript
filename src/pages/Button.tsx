type ButtonTypeProps = {
    variant:'primary'|'secondary'
}
export const Button = ({ variant }:ButtonTypeProps) => {
    return <button className={`variant btn btn-secondary`}>Custom Btn</button>
}