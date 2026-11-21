import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import SuccessModal from './SuccessModal';

describe('SuccessModal Component', () => {
  it('shows success message when open is true', () => {
    render(<SuccessModal open={true} onClose={() => {}} />);
    expect(screen.getByText(/Success!/i)).toBeInTheDocument();
    expect(screen.getByText(/successfully downloaded as a PDF/i)).toBeInTheDocument();
  });

  it('calls onClose when OK button is clicked', () => {
    const onCloseMock = vi.fn();
    render(<SuccessModal open={true} onClose={onCloseMock} />);
    fireEvent.click(screen.getByRole('button', { name: /ok/i }));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});