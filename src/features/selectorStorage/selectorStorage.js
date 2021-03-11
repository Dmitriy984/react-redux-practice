import React, { useEffect } from "react";
import { connect } from "react-redux";
import { selectStorage } from "../counter/actions";
import deleteCookie from "../../utils/deleteCookie";


const SelectorStorage = ({ storage, counter, selectStorage }) => {

  function removeHash() {
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }

  useEffect(() => {
    localStorage.setItem("storageState", storage);

    if (storage === "selectStorage") {
      if (window.location.hash) {
        removeHash();
      }
      if (document.cookie.indexOf("count") !== -1) {
        deleteCookie("count");
      }
      if (localStorage.count !== undefined) {
        delete localStorage.count;
      }
    }

    if (storage === "localStorage") {
      localStorage.setItem("count", counter);

      if (window.location.hash) {
        removeHash();
      }
      if (document.cookie.indexOf("count") !== -1) {
        deleteCookie("count");
      }
    }

    if (storage === "windowLocation") {
      window.location.hash = counter;

      if (document.cookie.indexOf("count") !== -1) {
        deleteCookie("count");
      }
      if (localStorage.count !== undefined) {
        delete localStorage.count;
      }
    }

    if (storage === "cookies") {
      document.cookie = `count=${counter}`;

      if (window.location.hash) {
        removeHash();
      }
      if (localStorage.count !== undefined) {
        delete localStorage.count;
      }
    }
  }, [storage, counter]);

  return (
    <div>
      <h2 style={{ color: "red", margin: "20px 0" }}>Please!</h2>
      <select
        className="custom-select"
        value={storage}
        onChange={(e) => selectStorage(e.target.value)}
      >
        <option value="selectStorage">Select storage</option>
        <option value="localStorage">LocalStorage</option>
        <option value="windowLocation">WindowLocation</option>
        <option value="cookies">Cookies</option>
      </select>
    </div>
  );
};

const mapStateToProps = ({ counter, storage }) => {
  return {
    counter: counter.value,
    storage: storage.storage,
  };
};

const mapDispatchToProps = {
  selectStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorStorage);
