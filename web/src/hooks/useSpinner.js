import { Spinner } from 'react-bootstrap'

export const useSpinner = (data="") => {
    if(data.length === 0){
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

}
