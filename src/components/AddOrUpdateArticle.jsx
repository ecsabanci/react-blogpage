import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import { ArticlesContext } from "./contexts/ArticlesContext";
import { useContext } from "react";
import { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import supabase from "../supabaseClient";
import toast from 'react-hot-toast';

const AddOrUpdateArticle = () => {
  const { id } = useParams();

  const { articles } = useContext(ArticlesContext);

  const [requestParams, setRequestParams] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
    labels: "",
  });

  useEffect(() => {
    if (articles.length > 0 && !requestParams.content) {
      const selectedPost = articles.find((article) => article.id == id);
      if (selectedPost) {
        setRequestParams(selectedPost);
      }
    }
  }, [id, requestParams, articles]);

  const customToolbar = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'indent': '-1'}, { 'indent': '+1' }],  
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequestParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const submit = () => {
    if(!requestParams.title && !requestParams.content) {
      toast.error("Please fill title and content before submitting!", {
        style: {
          background: 'red',
          color: '#ffff'
        }
      })
    }
    console.info("requestParams", requestParams);
    // await supabase.from("articles").insert(this.article);
  };

  return (
    <div className="relative mx-auto flex flex-col items-center sm:w-full lg:w-3/4 lg:items-start">
      <input
        type="text"
        id="title"
        name="title"
        className="search-input w-full border-gray-300 lg:w-1/2"
        placeholder="Title"
        value={requestParams?.title}
        onChange={handleChange}
      />
      <ReactQuill
        className="w-full"
        theme="snow"
        modules={{ toolbar: customToolbar }}
        value={requestParams?.content}
        onChange={(content) =>
          setRequestParams((prevParams) => ({
            ...prevParams,
            content,
          }))
        }
      />
      <input
        type="text"
        id="summary"
        name="summary"
        className="search-input mt-5 w-full border-gray-300 lg:w-1/2"
        placeholder="Summary"
        value={requestParams?.summary}
        onChange={handleChange}
      />
      <input
        type="text"
        id="image"
        name="image"
        className="search-input w-full border-gray-300 lg:w-1/2"
        placeholder="Image"
        value={requestParams?.image}
        onChange={handleChange}
      />
      <input
        type="text"
        id="labels"
        name="labels"
        className="search-input w-full border-gray-300 lg:w-1/2"
        placeholder="Labels"
        value={requestParams?.labels}
        onChange={handleChange}
      />
      <button
        className="sidebar-button mt-4 self-end bg-black text-gray-100 hover:bg-gray-900 hover:text-gray-100"
        onClick={submit}
      >
        Send <ArrowRightIcon className="h-4 w-4" />{" "}
      </button>
    </div>
  );
};

export default AddOrUpdateArticle;
