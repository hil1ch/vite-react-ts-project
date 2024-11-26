import { useState } from 'react';

// Хук для управления состоянием модального окна
export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return { isOpenModal, openModal, closeModal };
};
