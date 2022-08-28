import React, { useEffect, useContext } from 'react';
import { PriceControlContext } from './price-control-context.component';

const CustomSearch = () => {
  const { minPriceRange, maxPriceRange, changeMaxPrice, changeMinPrice } =
    useContext(PriceControlContext);

  const url = window.location.pathname;
  const checkUrl = url.includes('mens');

  useEffect(() => {
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');
    if (minValue !== null && maxValue !== null) {
      minValue.value = minPriceRange;
      maxValue.value = maxPriceRange;
    }

    if (checkUrl) {
      let inputLeft = document.getElementById('input-left');
      let inputRight = document.getElementById('input-right');

      let thumbLeft = document.querySelector('.sliders > .thumb.left');
      let thumbRight = document.querySelector('.sliders > .thumb.right');
      let range = document.querySelector('.sliders > .range');

      function setLeftValue() {
        let _this = inputLeft,
          min = parseInt(_this.min),
          max = parseInt(_this.max);

        _this.value = Math.min(
          parseInt(_this.value),
          parseInt(inputRight.value) - 1
        );

        let percent = ((_this.value - min) / (max - min)) * 100;

        changeMinPrice(_this.value);

        thumbLeft.style.left = percent + '%';
        range.style.left = percent + '%';
      }
      setLeftValue();

      function setRightValue() {
        let _this = inputRight,
          min = parseInt(_this.min),
          max = parseInt(_this.max);

        _this.value = Math.max(
          parseInt(_this.value),
          parseInt(inputLeft.value) + 1
        );

        let percent = ((_this.value - min) / (max - min)) * 100;

        changeMaxPrice(_this.value);

        thumbRight.style.right = 100 - percent + '%';
        range.style.right = 100 - percent + '%';
      }
      setRightValue();

      inputLeft.addEventListener('input', setLeftValue);
      inputRight.addEventListener('input', setRightValue);

      inputLeft.addEventListener('mouseover', function () {
        thumbLeft.classList.add('hover');
      });
      inputLeft.addEventListener('mouseout', function () {
        thumbLeft.classList.remove('hover');
      });
      inputLeft.addEventListener('mousedown', function () {
        thumbLeft.classList.add('active');
      });
      inputLeft.addEventListener('mouseup', function () {
        thumbLeft.classList.remove('active');
      });

      inputRight.addEventListener('mouseover', function () {
        thumbRight.classList.add('hover');
      });
      inputRight.addEventListener('mouseout', function () {
        thumbRight.classList.remove('hover');
      });
      inputRight.addEventListener('mousedown', function () {
        thumbRight.classList.add('active');
      });
      inputRight.addEventListener('mouseup', function () {
        thumbRight.classList.remove('active');
      });
    }
  }, [minPriceRange, maxPriceRange, checkUrl, changeMaxPrice, changeMinPrice]);

  return (
    <div className="custom-search">
      <div>
        <h1>Custom Search</h1>
        <div className="select-field">
          Categories
          <select>
            <option>Hats</option>
            <option>Jacket</option>
            <option>Sneakers</option>
          </select>
        </div>
        <div className="price-range">
          <div className="middle">
            <div className="multi-range-slider">
              <input
                type="range"
                id="input-left"
                min="0"
                max="100"
                defaultValue="25"
              />
              <input
                type="range"
                id="input-right"
                min="0"
                max="100"
                defaultValue="75"
              />

              <div className="sliders">
                <div className="track"></div>
                <div className="range"></div>
                <div className="thumb left"></div>
                <div className="thumb right"></div>
              </div>
            </div>
            <input type="text" id="minValue" />
            <input type="text" id="maxValue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSearch;
