import Link from 'next/link';

const Foot = () => {
  const sideLinks = [
    {name: 'Top', url: '/'}, 
    {name: 'Works', url: '/works'},
    {name: 'Contact', url: '/contact'}
  ];
  const topLinks = [
    {name: 'Instagram', url: 'https://www.instagram.com/kake__photo/'}, 
    {name: 'X', url: 'https://x.com/kake_webDesEng'},
    {name: 'Pixta', url: 'https://creator.pixta.jp/@prof2547496?_gl=1*wdrj94*_gcl_au*ODMyNTMzODc4LjE3MzExNzMyMzA.*_ga*MTIwNDU2NzI2MS4xNzMxMTczMjMx*_ga_VBSX8RFDG5*MTczMTE3MzIzMS4xLjEuMTczMTE3MzI0Mi40OS4wLjA.&_ga=2.112376640.593139733.1731173231-1204567261.1731173231'},
    {name: 'GitHub', url: 'https://github.com/kake-p'},
    {name: 'CrowdWorks', url: 'https://crowdworks.jp/public/employees/5693653'}
  ];

  return (
    <footer className="border relative bg-black text-white">
      <nav className="absolute top-[50%] -translate-y-1/2 ml-8">
        <ul className="flex flex-col gap-2 border-l border-[#df0000] pl-4">
          {sideLinks.map((link, index) => <li className="hover:bg-black hover:opacity-70" key={index}><Link href={link.url}>{ link.name }</Link></li>)}
        </ul>
      </nav>

      <div>
        <nav className="flex flex-col">
          <ul className="flex gap-16 border-b border-[#df0000] px-8 ml-auto mt-2">
            {topLinks.map((link, index) => <li className="hover:bg-black hover:opacity-70" key={index}><Link href={link.url} rel="noopener noreferrer" target="_blank">{ link.name }</Link></li>)}
          </ul>
        </nav>
          
        <p className="self-center text-center mt-10 hover:bg-black hover:opacity-70"><a href="">↑<br/>Back to Top</a></p>
      </div>
    </footer>
  )
}

export default Foot;