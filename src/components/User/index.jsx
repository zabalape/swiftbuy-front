import Title from './Title/Title';
import Header from './Header/Header';
import Card from './Card/Card';
import { account, order, payment, language, notifications, security, help } from './assets/icons';

const User = () => {
  // Define the handleLogout function to be passed to Title component
  const handleLogout = () => {
    // Your logout logic here
    console.log('Logged out');
  };

  return (
    <div className="w-[428px] h-[926px] relative bg-white">
      <Title className="w-[428px] h-7 justify-center items-center gap-[225px] inline-flex" userName={'Gabriel'} handleLogout={handleLogout} />
      <img src={help} alt="help" /> {/* Wrap the help icon with an img tag */}
      <Header userName={'Gabriel'} userProfile={'https://www.oficinadanet.com.br/imagens/post_categoria/2480/elon-musk2.jpg'} orders={['order1', 'order2','order3']} />
      <div>
        <div className="w-[361px] h-[212px] flex-col justify-start items-start gap-2 inline-flex" >
          <h2 className="text-black text-sm font-bold leading-snug">Personal</h2>
          <Card title={'Account information'} icon={account} />
          <Card title={'Order History'} icon={order} />
          <Card title={'Payment Methods'} icon={payment} />
        </div>
        <div className="w-[361px] h-[212px] flex-col justify-start items-start gap-2 inline-flex">
          <h2 className="text-black text-sm font-bold leading-snug">Accessibility & Security</h2>
          <Card title={'Language Preference'} icon={language} />
          <Card title={'Notifications'} icon={notifications} />
          <Card title={'Security and Privacy'} icon={security} />
          <Card title={'Help and Support'} icon={help} />
        </div>
      </div>
    </div>
  );
}

export default User;
