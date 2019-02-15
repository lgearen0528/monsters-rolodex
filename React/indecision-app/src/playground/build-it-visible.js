const app = {
    title: 'Build it!',
    subTitle: 'Visibility Toggle',
    detail: 'This is some detail for the build it app.'
};

const appRoot = document.getElementById('app');
let showDetail = false;
const onDetailClick = (e) => {
    showDetail = !showDetail
    render();
};

const render = () =>{
    let buttonText= 'Show Detail';
    const template = (
        <div>
            <h1>{app.subTitle}</h1>
            <button onClick={onDetailClick}>{showDetail ? 'Hide Detail'  : buttonText }</button>
            {showDetail && <p>{app.detail}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render()
