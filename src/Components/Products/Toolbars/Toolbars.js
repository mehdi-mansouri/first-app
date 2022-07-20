const Toolbar = (props) => {
    return (
        <>
            <h1>{props.addrres}</h1>
            <h2>{props.addrres}</h2>
            <input type="text" onChange={props.changeAddress} placeholder='Address' />
            <button type='button' className='mybutton' onClick={() => props.changeLanguage('de')}>change Language</button><br />
            <button type='button' onClick={() => props.setIsVisible(!props.isVisible)}>Toggle</button><br />
        </>
    );
}
export default Toolbar;