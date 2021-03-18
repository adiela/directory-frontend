import React from "react";
import MainLayout from "layouts/MainLayout/MainLayout";
import Button from "../components/Button/Button";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import SectionHeader from "../components/Headers/SectionHeader";
import BusinessCard from "../components/BusinessCard/BusinessCard";

export default function Home() {
  return (
    <MainLayout>
        <div id="search-container" className="flex flex-col p-5">
            <div className="m-auto">
                <h2 className="text-4xl font-thin">Find what you need</h2>
                <form noValidate={true} className="mt-8 bg-white p-2 rounded-full">
                    <input className="px-8 py-2 focus:outline-none rounded-l-full" type="text" name="description" placeholder="What are you looking for?" />
                    <input required={true} className="px-5 py-2 focus:outline-none border-r-2 border-l-2" type="text" name="location" placeholder="Location" />
                    <select required={true} className="px-8 py-2 focus:outline-none bg-white" name="category" id="category-select">
                        <option disabled={true} selected={true} hidden={true}>All Categories</option>
                        <option value="cars">Cars</option>
                        <option value="photography">Photography</option>
                        <option value="dresses">Dresses</option>
                    </select>
                    <Button type="submit" size="lg" styles="ml-12" >Search</Button>
                </form>
            </div>
        </div>
        <div className="flex-container py-10">
            <SectionHeader>Popular Categories</SectionHeader>
            <ul className="grid grid-cols-6">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </ul>
        </div>
        <div className="flex-container py-10">
            <SectionHeader>Popular Businesses</SectionHeader>
            <ul className="grid grid-cols-3">
                <BusinessCard rating={1} />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
                <BusinessCard />
            </ul>
        </div>
    </MainLayout>
  );
}
