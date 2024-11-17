import styles from './Header.module.scss'
import Button from '@/shared/Button/Button'

const Header = () => {

  const dropdowns = [
    {
      title: "For Jobseekers",
      items: ["Resume Writing Tips", "Interview Prepration"]
    },
    {
      title: "For Clients",
      items: ["Client Onbarding Guide", "Service Packages"]
    },
    {
      title: "Sectors",
      items: ["Technology", "Healthcare"]
    },
    {
      title: "Resources",
      items: ["Blog", "Case Studies"]
    }
  ];

  return (
    <nav className={`navbar bg-body-tertiary d-inline-block w-100 ${styles.navbar_container}`}>
      <div className={styles.navbar_items}>
        <div className='d-inline-flex gap-5 align-items-center'>
          <a className={`navbar-brand ${styles.brand}`} href="#">Software Recruitment co.</a>
          <div className='gap-3 d-none d-lg-flex'>
            {dropdowns.map((dropdown, index) => (
              <div className="nav-item nav-underline dropdown" key={index}>
                <a
                  className={`nav-link dropdown-toggle ${styles.toggle}`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className={styles.dropdown_title}>
                    {dropdown.title}
                  </span>

                </a>
                <ul className="dropdown-menu">
                  {dropdown.items.map((item, idx) => (
                    <li key={idx}>
                      <a className="dropdown-item" href="#">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="d-none d-md-flex" style={{ display: 'flex', gap: '10px' }}>
          <Button label='Upload CV' backgroundColor='#FCDF69' color='black' />
          <Button label='Contact us' backgroundColor='#F99D76' color='black' />
        </div>
        <button
          className="navbar-toggler d-lg-none d-sm-block"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end w-100" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h2 className='text-white fw-bold' id="offcanvasNavbarLabel">Software Recruitment co.</h2>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className={styles.dropdown_canvas_container}>
              <ul className={`navbar-nav justify-content-end flex-grow-1 pe-3 `}>

                {dropdowns.map((dropdown, index) => (
                  <li className="nav-item dropdown" key={index}>
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {dropdown.title}
                    </a>
                    <ul className="dropdown-menu">
                      {dropdown.items.map((item, idx) => (
                        <li key={idx}>
                          <a className="dropdown-item" href="#">{item}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-md-none d-sm-flex">
              <Button className='me-3' label='Upload CV' backgroundColor='#FCDF69' color='black' />
              <Button label='Contact us' backgroundColor='#F99D76' color='black' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
