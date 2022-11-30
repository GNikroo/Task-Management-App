import { useState } from 'react';

const Checkbox = ({label}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <label className="form-check-label">
                <input className="form-check-input ms-3 mt-0" type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)}/>
                <span>{label}</span>
            </label>
        </div>
    )
}

export default Checkbox