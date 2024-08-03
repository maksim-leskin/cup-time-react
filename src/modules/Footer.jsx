export const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <a className="footer__logo-link">
        <img
          className="footer__logo"
          src="image/logo.svg"
          alt="Логотип Cup Time"
        />
      </a>

      <div className="footer__nav">
        <ul className="footer__menu">
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">
              Чай
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">
              Кофе
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">
              Чайники
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">
              Турки
            </a>
          </li>
          <li className="footer__menu-item">
            <a className="footer__menu-link" href="#">
              Прочее
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <p className="footer__copyright">©Petshop, 2024</p>

        <p className="footer__description">Проект сделан в учебных целях</p>

        <ul className="footer__developers">
          <li className="footer__developer">
            Designer:
            <a className="footer__developer-link" href="#">
              Anastasia Ilina
            </a>
          </li>

          <li className="footer__developer">
            Developer:
            <a className="footer__developer-link" href="#">
              Maksim Leskin
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__contacts">
        <a className="footer__email" href="mailto:CUPTIME@gmail.com">
          CUPTIME@gmail.com
        </a>

        <ul className="footer__social">
          <li className="footer__social__item">
            <a className="footer__social-link" href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3C8.824 3 3 8.824 3 16C3 23.176 8.824 29 16 29C23.176 29 29 23.176 29 16C29 8.824 23.176 3 16 3ZM22.032 11.84C21.837 13.894 20.992 18.886 20.563 21.187C20.381 22.162 20.017 22.487 19.679 22.526C18.925 22.591 18.353 22.032 17.625 21.551C16.481 20.797 15.831 20.329 14.726 19.601C13.439 18.756 14.271 18.288 15.012 17.534C15.207 17.339 18.535 14.31 18.6 14.037C18.609 13.9957 18.6078 13.9527 18.5965 13.9119C18.5852 13.8712 18.5641 13.8338 18.535 13.803C18.457 13.738 18.353 13.764 18.262 13.777C18.145 13.803 16.325 15.012 12.776 17.404C12.256 17.755 11.788 17.937 11.372 17.924C10.904 17.911 10.02 17.664 9.357 17.443C8.538 17.183 7.901 17.04 7.953 16.585C7.979 16.351 8.304 16.117 8.915 15.87C12.711 14.219 15.233 13.127 16.494 12.607C20.108 11.099 20.849 10.839 21.343 10.839C21.447 10.839 21.694 10.865 21.85 10.995C21.98 11.099 22.019 11.242 22.032 11.346C22.019 11.424 22.045 11.658 22.032 11.84Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li className="footer__social__item">
            <a className="footer__social-link" href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.3337 20.0001L20.2537 16.0001L13.3337 12.0001V20.0001ZM28.747 9.56008C28.9203 10.1867 29.0403 11.0267 29.1203 12.0934C29.2137 13.1601 29.2537 14.0801 29.2537 14.8801L29.3337 16.0001C29.3337 18.9201 29.1203 21.0667 28.747 22.4401C28.4137 23.6401 27.6403 24.4134 26.4403 24.7467C25.8137 24.9201 24.667 25.0401 22.907 25.1201C21.1737 25.2134 19.587 25.2534 18.1203 25.2534L16.0003 25.3334C10.4137 25.3334 6.93366 25.1201 5.56033 24.7467C4.36033 24.4134 3.58699 23.6401 3.25366 22.4401C3.08033 21.8134 2.96033 20.9734 2.88033 19.9067C2.78699 18.8401 2.74699 17.9201 2.74699 17.1201L2.66699 16.0001C2.66699 13.0801 2.88033 10.9334 3.25366 9.56008C3.58699 8.36008 4.36033 7.58675 5.56033 7.25341C6.18699 7.08008 7.33366 6.96008 9.09366 6.88008C10.827 6.78675 12.4137 6.74675 13.8803 6.74675L16.0003 6.66675C21.587 6.66675 25.067 6.88008 26.4403 7.25341C27.6403 7.58675 28.4137 8.36008 28.747 9.56008Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li className="footer__social__item">
            <a className="footer__social-link" href="#">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 3C8.824 3 3 8.824 3 16C3 23.176 8.824 29 16 29C23.176 29 29 23.176 29 16C29 8.824 23.176 3 16 3ZM22.032 11.84C21.837 13.894 20.992 18.886 20.563 21.187C20.381 22.162 20.017 22.487 19.679 22.526C18.925 22.591 18.353 22.032 17.625 21.551C16.481 20.797 15.831 20.329 14.726 19.601C13.439 18.756 14.271 18.288 15.012 17.534C15.207 17.339 18.535 14.31 18.6 14.037C18.609 13.9957 18.6078 13.9527 18.5965 13.9119C18.5852 13.8712 18.5641 13.8338 18.535 13.803C18.457 13.738 18.353 13.764 18.262 13.777C18.145 13.803 16.325 15.012 12.776 17.404C12.256 17.755 11.788 17.937 11.372 17.924C10.904 17.911 10.02 17.664 9.357 17.443C8.538 17.183 7.901 17.04 7.953 16.585C7.979 16.351 8.304 16.117 8.915 15.87C12.711 14.219 15.233 13.127 16.494 12.607C20.108 11.099 20.849 10.839 21.343 10.839C21.447 10.839 21.694 10.865 21.85 10.995C21.98 11.099 22.019 11.242 22.032 11.346C22.019 11.424 22.045 11.658 22.032 11.84Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
