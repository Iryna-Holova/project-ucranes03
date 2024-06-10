const RecipeMainInfo = ({ thumb, title, category, time, description }) => {
  return (
    <div>
      <img src={thumb} alt={title} />
      <h2>{title}</h2>
      <ul>
        <li>{category}</li>
        <li>{time}</li>
      </ul>
      <p>{description}</p>
      <button>
        <img src="" alt="" />
        <span>
          <span>Created by:</span>
          <span></span>
        </span>
      </button>
    </div>
  );
};

export default RecipeMainInfo;
