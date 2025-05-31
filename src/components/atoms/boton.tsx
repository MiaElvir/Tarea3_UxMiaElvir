type BotonAtomicoProps = {
  texto: string;
  color: string;
};

const BotonAtomico = ({ texto, color}: BotonAtomicoProps) => {
  return (
    <button className="btStyle2">
      {texto}
    </button>
  );
};

export default BotonAtomico;
