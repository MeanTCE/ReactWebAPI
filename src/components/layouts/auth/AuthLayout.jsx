import DocumentTitle from 'react-document-title'

const AuthLayout = ({children, title= "Home"}) => {
  return (
    <>
    <DocumentTitle title={title +' | ReactAPI'} />
    <div className="bg-info">
        <div className="d-flex flex-columm align-items-center justify-content-center vh-100">
            {children}
        </div>
    </div>
    </>
  )
}

export default AuthLayout