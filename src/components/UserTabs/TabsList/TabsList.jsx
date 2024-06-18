import { useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/authSlice/selectors';
import { scrollToElementHorizontally } from 'helpers/scolls';
import { useMobileMediaQuery, useTabletMediaQuery } from 'hooks/device-type';
import css from './TabsList.module.css';

const TABS = {
  current: [
    { name: 'My recipes', path: 'recipes' },
    { name: 'My favorites', path: 'favorites' },
    { name: 'Followers', path: 'followers' },
    { name: 'Following', path: 'following' },
  ],
  other: [
    { name: 'Recipes', path: 'recipes' },
    { name: 'Followers', path: 'followers' },
  ],
};

const TabsList = () => {
  const { id: currentUserId } = useSelector(selectUser);
  const { id } = useParams();
  const location = useLocation();
  const isMobile = useMobileMediaQuery();
  const isTablet = useTabletMediaQuery();
  const [activePath, setActivePath] = useState(null);
  const [activeTabWidth, setActiveTabWidth] = useState(0);
  const [activeTabX, setActiveTabX] = useState(0);
  const [tabsWidth, setTabsWidth] = useState(0);
  const tabsWrapperRef = useRef(null);
  const tabsListRef = useRef(null);
  const activeTabRef = useRef(null);
  const user = currentUserId === id ? 'current' : 'other';

  const updateActiveTabPosition = () => {
    const tabElement = activeTabRef.current;
    const tabRect = tabElement.getBoundingClientRect();
    const listRect = tabsListRef.current.getBoundingClientRect();
    setActiveTabWidth(tabElement.offsetWidth);
    setActiveTabX(tabRect.left - listRect.left);
    setTabsWidth(listRect.width);
  };

  useLayoutEffect(() => {
    setActivePath(location.pathname.split('/').slice(-1)[0]);
  }, [location.pathname]);

  useLayoutEffect(() => {
    if (
      !tabsWrapperRef.current ||
      !tabsListRef.current ||
      !activeTabRef.current
    )
      return;

    updateActiveTabPosition();
    isMobile &&
      scrollToElementHorizontally(tabsWrapperRef.current, activeTabRef.current);
  }, [activePath, isMobile, isTablet]);

  return (
    <div
      ref={tabsWrapperRef}
      className={css.tabs_wrapper}
      style={{
        '--var-active-width': `${activeTabWidth}px`,
        '--var-active-left': `${activeTabX}px`,
        '--var-tabs-width': `${tabsWidth}px`,
      }}
    >
      <ul className={css.tabs_list} ref={tabsListRef}>
        {TABS[user].map(({ name, path }, idx) => (
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
