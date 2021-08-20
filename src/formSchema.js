import * as yup from 'yup';

const formSchema = yup.object().shape({
    customerName: yup
        .string()
        .trim()
        .required('Customer name is required')
        .min(2, 'Customer name must be 2 characters long'),
    size: yup
        .string()
        .oneOf(['6" Mini', '10" Small', '12" Medium', '14" Large', '16" Jumbo Large'], 
                'Size is required'),
    sauce : yup
        .string()
        .oneOf(['classic', 'bbq', 'seafood', 'veggie', 'sauceless'], 'Sauce is required'),
    pepperoni: yup.boolean(),
    tomatos: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    garlic: yup.boolean(),
    spicySausage: yup.boolean(),
    cheese: yup.boolean(),
    pineapple: yup.boolean(),
    pepper: yup.boolean(),
    extraCheese: yup.boolean(),
    glutenFree: yup.boolean(),
    special: yup
        .string()
        .trim()
        .max(100, '100 characters max'),
    count: yup
        .number()
        .integer()
        .min(1, 'Please put the amount')
        .max(10, '10 Pizzas max limit reached')
})

export default formSchema

