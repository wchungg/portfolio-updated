const Button = ({ text, className, id }) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
        <div className="cta-button group">
            <div className="bg-circle" />
            <p className='text font-semibold'>{text}</p>
            <div className="arrow-wrapper">
                <img src="/images/arrow-down.svg" alt="v" />
            </div>
        </div>
    </a>
  )
}

export default Button