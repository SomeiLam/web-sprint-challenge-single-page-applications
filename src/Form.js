import React from 'react'
import { Link } from 'react-router-dom';
export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form' id="pizza-form" onSubmit={onSubmit}>
            <div className='top-container'>
                <h2>Build Your Own Pizza</h2>
            </div>
            <div className='middle-container'>
                <h4>Build Your Own Pizza</h4>

                <div className='name input' id="name-input">
                    <label>
                        <h3>Customer Name</h3>
                        <p>Required.</p>
                        <input
                            value={values.customerName}
                            onChange={onChange}
                            name='customerName'
                            type='text'
                        />
                    </label>
                </div>

                <div className='size input'>
                    <label>
                        <h3>Choice of Size</h3>
                        <p>Required.</p>
                        <select
                            value={values.size}
                            onChange={onChange}
                            name='size'
                        >
                            <option value=''>Select</option>
                            <option value='6" Mini'>6" Mini</option>
                            <option value='10" Small'>10" Small</option>
                            <option value='12" Medium'>12" Medium</option>
                            <option value='14" Large'>14" Large</option>
                            <option value='16" Jumbo Large'>16" Jumbo Large</option>
                        </select>
                    </label>
                </div>

                <div className='sauce input'>
                    <h3>Choice of Sauce</h3>
                    <p>Required.</p>
                    <div>
                        <input type="radio" id="classic" name="sauce" onChange={onChange}
                                value="classic" checked={values.sauce === 'classic'}/>
                        <label htmlFor="classic">Classic</label>
                    </div>
                    <div>
                        <input type="radio" id="bbq" name="sauce" onChange={onChange} 
                                value="bbq" checked={values.sauce === 'bbq'}/>
                        <label htmlFor="bbq">BBQ Chicken</label>
                    </div>
                    <div>
                        <input type="radio" id="seafood" name="sauce" onChange={onChange}
                                value="seafood" checked={values.sauce === 'seafood'}/>
                        <label htmlFor="seafood">Seafood</label>
                    </div>
                    <div>
                        <input type="radio" id="veggie" name="sauce" onChange={onChange}
                                value="veggie" checked={values.sauce === 'veggie'}/>
                        <label htmlFor="veggie">Veggie</label>
                    </div>
                    <div>
                        <input type="radio" id="sauceless" name="sauce" onChange={onChange}
                                value="sauceless" checked={values.sauce === 'sauceless'}/>
                        <label htmlFor="sauceless">Sauceless</label>
                    </div>
                </div>

                <div className='toppings input'>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                    <div className='flex-container'>
                        <label>
                            <input
                                id="pepperoni"
                                type="checkbox"
                                name="pepperoni"
                                checked={values.pepperoni}
                                onChange={onChange}
                            />
                            <span>Pepperoni</span>
                        </label>
                        <label>
                            <input
                                id="tomatos"
                                type="checkbox"
                                name="tomatos"
                                checked={values.tomatos}
                                onChange={onChange}
                            />
                            <span>Diced Tomatos</span>
                        </label>
                        <label>
                            <input
                                id="sausage"
                                type="checkbox"
                                name="sausage"
                                checked={values.sausage}
                                onChange={onChange}
                            />
                            <span>Sausage</span>
                        </label>
                        <label>
                            <input
                                id="bacon"
                                type="checkbox"
                                name="bacon"
                                checked={values.bacon}
                                onChange={onChange}
                            />
                            <span>Canadian Bacon</span>
                        </label>
                        <label>
                            <input
                                id="garlic"
                                type="checkbox"
                                name="garlic"
                                checked={values.garlic}
                                onChange={onChange}
                            />
                            <span>Roasted Garlic</span>
                        </label>
                        <label>
                            <input
                                id="spicySausage"
                                type="checkbox"
                                name="spicySausage"
                                checked={values.spicySausage}
                                onChange={onChange}
                            />
                            <span>Spicy Italian Sausage</span>
                        </label>
                        <label>
                            <input
                                id="cheese"
                                type="checkbox"
                                name="cheese"
                                checked={values.cheese}
                                onChange={onChange}
                            />
                            <span>Three Cheese</span>
                        </label>
                        <label>
                            <input
                                id="pineapple"
                                type="checkbox"
                                name="pineapple"
                                checked={values.pineapple}
                                onChange={onChange}
                            />
                            <span>Pineapple</span>
                        </label>
                        <label>
                            <input
                                id="pepper"
                                type="checkbox"
                                name="pepper"
                                checked={values.pepper}
                                onChange={onChange}
                            />
                            <span>Green Pepper</span>
                        </label>
                        <label>
                            <input
                                id="extraCheese"
                                type="checkbox"
                                name="extraCheese"
                                checked={values.extraCheese}
                                onChange={onChange}
                            />
                            <span>Extra Cheese</span>
                        </label>
                    </div>

                    <div className='substitute input'>
                        <h3>Choice of Substitute</h3>
                        <p>Choose up to 1</p>
                        <label className='switch'>
                            <input 
                                type='checkbox' 
                                name='glutenFree'
                                checked={values.glutenFree}
                                onChange={onChange}
                            />
                            <span className='slider'></span>
                            <span>Gluten Free Crust (+ $1.00)</span>
                        </label>
                    </div>

                    <div className='special input' id="special-text">
                        <h3>Special Instructions</h3>
                        <textarea
                            value={values.special}
                            onChange={onChange}
                            name='special'
                            type='text'
                            rows="4" 
                            cols="60"
                        />
                    </div>

                    <div className='errors'>
                        <div>{errors.customerName}</div>
                        <div>{errors.size}</div>
                        <div>{errors.sauce}</div>
                        <div>{errors.toppings}</div>
                        <div>{errors.special}</div>
                        <div>{errors.count}</div>
                    </div>

                    <div className='flex-container2 input'>
                        <div className='count'>
                            <input 
                            value={values.count}
                            onChange={onChange}
                            type='number'
                            id='count'
                            name='count'
                            min='1'
                            max='10'
                            />                        
                        </div>
                        <div className='submit'>
                            <button disabled={disabled} id="order-button">Add to Order</button>
                            <Link to="/confirmation">Check Your Order</Link>
                        </div>
                        
                    </div>

                </div>

                
            </div>
        </form>
    )
}
