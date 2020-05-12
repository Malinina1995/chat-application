declare module 'react-pagination-js' {
    declare interface PaginationProps {
        currentPage: number;
        totalSize: number;
        changeCurrentPage: (pageNumber: number) => void;
        theme: "default" | "dark" | "bootstrap" | "border-bottom" | "circle";

        sizePerPage?: number;
        showFirstLastPages?: boolean;
        firstPageText?: string;
        lastPageText?: string;
        nextPageText?: string;
        numberOfPagesNextToActivePage?: number;
    }

    declare class Pagination extends React.Component<PaginationProps, any> {

    }

    export default Pagination;
}
