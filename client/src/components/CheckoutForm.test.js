import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    expect(screen.getByText(/checkout form/i))
});

test("form shows success message on submit with form details", () => {});
    render(<CheckoutForm />)
    // STEP 2: Check for inputs and submit buttton
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitBtn = screen.getByRole('button', {name: /checkout/i});

    //STEP 3: Fill out inputs
    fireEvent.change(firstNameInput, {target: { value: 'Samuel L' }});
    fireEvent.change(lastNameInput, {target: { value: 'Jackson' }});
    fireEvent.change(addressInput, {target: { value: '123 Its None of Your Biz Street'}});
    fireEvent.change(cityInput, {target: { value: 'Hollywood' }});
    fireEvent.change(stateInput, {target: { value: 'CA' }});
    fireEvent.change(zipInput, {target: { value: '90210' }});

    //STEP 4: Click CHECKOUT Button to submit form
    fireEvent.click(submitBtn);

    //STEP 5: Assertions
    expect(screen.getByText(/samuel l/i))
    expect(screen.getByText(/jackson/i))
    expect(screen.getByText(/123 its none of your biz street/i))
    expect(screen.getByText(/hollywood/i))
    expect(screen.getByText(/90210/i))
    expect(screen.getByTestId('successMessage'))
});
