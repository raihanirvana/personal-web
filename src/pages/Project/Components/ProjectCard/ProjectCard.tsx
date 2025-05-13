import { GeneralText } from '../../../../components';

const ProjetCard = (props: any) => (
  <div className="bg-[#0f0f0f] rounded-2xl p-6 shadow-lg shadow-blue-600/40 w-50 h-80">
    <img src={props.imageSource} alt="Project View" className="w-40 h-40" />
    <GeneralText text={props.title} />
    <GeneralText text={props.desc} />
    <button onClick={() => window.open(props.github)} className='text-white cursor-pointer'>Github Source</button>
  </div>
);

export default ProjetCard;
