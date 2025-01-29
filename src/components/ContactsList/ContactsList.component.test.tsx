import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactsList from './ContactsList.component';
import ContactsListItem from '../../data/ContactsList.data';

describe('ContactsList Component', () => {
  it('matches the snapshot', () => {
    const { asFragment } = render(<ContactsList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls window.open with the correct URL when a contact button is clicked', async () => {
    render(<ContactsList />);
    
    const openMock = jest.spyOn(window, 'open').mockImplementation(() => null);

    const buttons = screen.getAllByRole('button');

    for (let i = 0; i < ContactsListItem.length; i++) {
      await userEvent.click(buttons[i]);
      expect(openMock).toHaveBeenCalledWith(ContactsListItem[i].href);
    }
    
    openMock.mockRestore();
  });
});
