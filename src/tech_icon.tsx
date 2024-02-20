function TechIcon({href, src, className}: { href: string, src: string, className: string }) {
    return(
        <a href={href} className='hover:scale-125 hover:contrast-75 transition ease-in-out duration-150'><img className={className} src={src} alt='tech_icon'></img></a>
    )
}

export default TechIcon;