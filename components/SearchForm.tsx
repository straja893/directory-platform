import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchForm = ({ query }: { query: string | undefined }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
