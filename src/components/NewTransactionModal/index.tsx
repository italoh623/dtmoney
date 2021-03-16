import Modal from 'react-modal';

import { Container } from './styles';

interface NewTransactionModalOpenProps {
  isOpen: boolean;
  onRequetClose: () => void;
}

export function NewTransactionModal({isOpen, onRequetClose}: NewTransactionModalOpenProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequetClose}
    >
      <h2>cadastrar transsação</h2>
    </Modal>
  )
}