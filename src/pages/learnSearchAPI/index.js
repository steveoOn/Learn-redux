import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "../../components/Search";

///// CSS /////
const ImageWraper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 360px);
  grid-column-gap: 16px;
  width: 1080px;
  margin: auto;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Img = styled.img`
  width: ${1080 / 3}px;
  height: 280px;
  border-radius: 4px;
`;

const Publisher = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
`;

const ImgTitle = styled.h5`
  font-size: 18px;
  text-transform: uppercase;
  color: #666;
  margin: 20px 0;
`;

const Btn = styled.button``;

///// Components /////
const API_KEY = "4d8578be6b5f11d01d9fa3acab4894b2";

const SearchAPIPage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    // get the html element value
    let target = e.target.elements.valueName.value;

    fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${target}&count=12
    `)
      .then(response => response.json())
      .then(json => setRecipes(json.recipes))
      .catch(err => console.log("Fetch Err:", err));
  };

  return (
    <div>
      <Search getValue={handleSubmit} />
      <ImageWraper>
        {recipes.map(recipe => (
          <ImageBox key={recipe.recipe_id}>
            <Img src={recipe.image_url} />
            <ImgTitle>
              {recipe.title.length < 20
                ? recipe.title
                : `${recipe.title.substring(0, 25)}...`}
            </ImgTitle>
            <Publisher>Publisher: {recipe.publisher}</Publisher>
            <Btn>
              <Link to={{ pathname: `/learn-search/${recipe.recipe_id}` }}>
                View Recipe
              </Link>
            </Btn>
          </ImageBox>
        ))}
      </ImageWraper>
    </div>
  );
};

export default SearchAPIPage;
