import "../assets/Styles.css";

const categories = [
  { name: "Comédie", color: "#FFC107" },
  { name: "Action", color: "#F44336" },
  { name: "Drame", color: "#2196F3" },
  { name: "Sci-Fi", color: "#9C27B0" },
  { name: "Romance", color: "#E91E63" },
  { name: "Thriller", color: "#4CAF50" },
];

function Categories() {
  return (
    <section className="categories">
      {categories.map((category, index) => (
        <button
          key={index}
          className="category-button"
          style={{ backgroundColor: category.color }}
        >
          {category.name}
        </button>
      ))}
    </section>
  );
}

export default Categories;
