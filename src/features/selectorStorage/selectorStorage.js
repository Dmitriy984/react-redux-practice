import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { selectStorage } from "../counter/actions";
import deleteCookie from "../../utils/deleteCookie";

const SelectorStorage = ({ storage, selectStorage }) => {
  function removeHash() {
    window.history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }

  const cleaner = useCallback(() => {
    if (window.location.hash) {
      removeHash();
    }
    if (document.cookie.indexOf("count") !== -1) {
      deleteCookie("count");
    }
    if (localStorage.count !== undefined) {
      console.log(localStorage.count);
      delete localStorage.count;
    }
  }, []);

  useEffect(() => {
    if (storage === "Select storage" || storage === null) {
      cleaner();
    }

    if (storage === "localStorage") {
      if (window.location.hash) {
        removeHash();
      }
      if (document.cookie.indexOf("count") !== -1) {
        deleteCookie("count");
      }
    }

    if (storage === "windowLocation") {
      if (document.cookie.indexOf("count") !== -1) {
        deleteCookie("count");
      }
      if (localStorage.count !== undefined) {
        delete localStorage.count;
      }
    }

    if (storage === "cookies") {
      if (window.location.hash) {
        removeHash();
      }
      if (localStorage.count !== undefined) {
        delete localStorage.count;
      }
    }
  }, [storage, cleaner]);

  return (
    <p>
      <select onChange={(e) => selectStorage(e.target.value)}>
        <option>Select storage</option>
        <option value="localStorage">LocalStorage</option>
        <option value="windowLocation">WindowLocation</option>
        <option value="cookies">Cookies</option>
      </select>
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.value,
    storage: state.storage
  };
};

const mapDispatchToProps = {
  selectStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectorStorage);
