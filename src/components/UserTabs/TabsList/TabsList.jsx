import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './TabsList.module.css';

const TABS = [
  { name: 'My recipes', path: 'recipes' },
  { name: 'My favorites', path: 'favorites' },
  { name: 'Followers', path: 'followers' },
  { name: 'Following', path: 'following' },
];

const TabsList = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(null);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabX, setActiveTabX] = useState(0);
  const tabsWrapperRef = useRef(null);
  const activeTabRef = useRef(null);
  const updateActiveTabPosition = () => {
    const tabElement = activeTabRef.current;
    const tabRect = tabElement.getBoundingClientRect();
    const wrapperRect = tabsWrapperRef.current.getBoundingClientRect();
    setActiveTabWidth(tabElement.offsetWidth);
    setActiveTabX(tabRect.left - wrapperRect.left);
  };

  useLayoutEffect(() => {
    setActivePath(location.pathname.split('/').slice(-1)[0]);
  }, [location.pathname]);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (tabsWrapperRef.current) {
        updateActiveTabPosition();
      }
    }, 100);
  }, [activePath]);

  useLayoutEffect(() => {
    const observer = new MutationObserver(() => {
      updateActiveTabPosition();
    });

    if (tabsWrapperRef.current) {
      observer.observe(tabsWrapperRef.current, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    window.addEventListener('resize', updateActiveTabPosition);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateActiveTabPosition);
    };
  }, [tabsWrapperRef]);

  return (
    <div
      className={css.tabs_wrapper}
      style={{
        '--var-active-width': `${activeTabWidth}px`,
        '--var-active-left': `${activeTabX}px`,
      }}
    >
      <ul className={css.tabs_list} ref={tabsWrapperRef}>
        {TABS.map(({ name, path }, idx) => (
          <li key={idx}>
            <NavLink
              to={path}
              ref={activePath === path ? activeTabRef : null}
              className={css.tab}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsList;
