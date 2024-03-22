export default function Tabs({ children, buttons,ButtonsContainer='menu' }) {  // here we are creating default prop value 
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
