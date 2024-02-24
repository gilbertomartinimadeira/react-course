const Navbar =
    (<nav>
        <h1 className="header">Crossmade</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
    );

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(Navbar);
