function DefaultLayout({children}) {
    return ( 
        <div>
            <header style={{backgroundColor: 'red'}}>Header</header>
            <div className="container">
                {children}
            </div>
            <header style={{backgroundColor: 'blue'}}>Header</header>
        </div>
     );
}

export default DefaultLayout;