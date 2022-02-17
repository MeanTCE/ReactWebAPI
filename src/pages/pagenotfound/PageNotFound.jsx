import DocumentTitle from 'react-document-title'

const PageNotFound = () => {
    <DocumentTitle title='Page not found' />
    return (
        <>
            <div className='d-flex flex-colmn align-items-center justify-content-center vh-100 bg-warning'>
                <h1 className="card p-3">404 page not found</h1>
            </div>
        </>
    )
}

export default PageNotFound