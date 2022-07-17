import './GlobalComponent.module.scss';

function GlobalComponent({children}) {
    return ( 
        <div>
            {children}
        </div>
     );
}

export default GlobalComponent;