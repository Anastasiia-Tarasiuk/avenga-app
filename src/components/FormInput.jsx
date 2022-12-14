import Form from 'react-bootstrap/Form';

export const FormInput = ({ labelText, inputType, inputName, onChange, controlId }) => {
    return <Form.Group className="mb-3" controlId={controlId}>
                <Form.Label>{labelText}
                        <Form.Control type={inputType} name={inputName} onChange={e => onChange(e.currentTarget.value)} required/>
                </Form.Label>
            </Form.Group>
}