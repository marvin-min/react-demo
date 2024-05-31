import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce';
import Typer from './Typer';
import { render } from '@testing-library/react';

describe(Typer, () => {
  it("displays Typer component", () => {
    const { getByRole } = render(<Typer />);
    const typeBtn = getByRole('button', { name: "Type" });
    expect(typeBtn).toBeInTheDocument();
  })
})