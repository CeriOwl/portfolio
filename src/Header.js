
export default function Header({props}) {
    const data_links = ["home", "projects", "about", "contact"];
    return (
        <header className={`header-daylight ${props}`} id="header">
            <nav>
                <ul>
                    {
                        data_links.map((link,index) => <li><a title={link} key={index} href={`#${link}`} rel="noreferrer">{link}</a></li>)
                    }
                </ul>
            </nav>
        </header>
    )
}