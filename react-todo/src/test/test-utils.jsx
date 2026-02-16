import { render } from "@testing-library/react";
import { ThemeProvider } from "../context/ThemeProvider";

export function renderWithProviders(ui, options) {
  return render(ui, { wrapper: ThemeProvider, ...options });
}
