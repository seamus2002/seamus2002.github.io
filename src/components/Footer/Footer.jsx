const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0">© {currentYear} Seamus English</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a href="https://github.com/seamus2002">
                            <i className="bi bi-github"></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a href="https://www.linkedin.com/in/seamusenglish/">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
