const saveIcon = ( opacity ) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" fill="none" viewBox="0 0 22 21">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="2"
        d="M10.993 4.136c-2-2.338-5.333-2.966-7.838-.826s-2.858 5.719-.89 8.25c1.485 1.912 5.706 5.751 7.683 7.515.363.324.545.486.758.55.184.055.39.055.575 0 .212-.064.394-.226.757-.55 1.977-1.764 6.198-5.603 7.684-7.515 1.967-2.531 1.658-6.132-.89-8.25-2.549-2.118-5.84-1.512-7.839.826Z"
        className="Icon"
        clipRule="evenodd"
      />
    </svg>
  );
  
  const homeIcon = ( opacity ) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="2"
        d="M8.5 17h8M11.518 2.764 4.735 8.04c-.453.353-.68.53-.843.75a2 2 0 0 0-.318.65c-.074.265-.074.552-.074 1.126V17.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.02 21 5.58 21 6.7 21h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874c.218-.428.218-.988.218-2.108v-7.235c0-.574 0-.861-.074-1.126a2.002 2.002 0 0 0-.318-.65c-.163-.22-.39-.397-.843-.75l-6.783-5.275c-.351-.273-.527-.41-.72-.462a1 1 0 0 0-.523 0c-.194.052-.37.189-.721.462Z"
      />
    </svg>
  );
  
  const cartIcon = ( opacity ) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="2"
        d="M16.5 8a4 4 0 1 1-8 0m-4.367-.599-.7 8.4c-.15 1.805-.226 2.707.08 3.403a3 3 0 0 0 1.319 1.434C5.5 21 6.405 21 8.216 21h8.567c1.81 0 2.716 0 3.384-.362a3 3 0 0 0 1.32-1.434c.305-.696.23-1.598.08-3.403l-.7-8.4c-.13-1.552-.195-2.329-.539-2.916a3 3 0 0 0-1.294-1.191C18.42 3 17.641 3 16.083 3H8.916c-1.558 0-2.337 0-2.95.294a3 3 0 0 0-1.295 1.19c-.344.588-.409 1.365-.538 2.917Z"
      />
    </svg>
  );
  
  const userIcon = ( opacity ) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={opacity}
        strokeWidth="2"
        d="M14.167 9.494a3 3 0 1 1-3.334-4.988 3 3 0 0 1 3.334 4.988Zm2.576 6.263A6 6 0 0 1 18.5 20h-12a6 6 0 0 1 10.243-4.243Z"
      />
    </svg>
  );
  
  export { saveIcon, homeIcon, cartIcon, userIcon };
  