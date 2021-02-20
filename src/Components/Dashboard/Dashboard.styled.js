import styled from "styled-components";

export const DashboardWrapper = styled.div`
    max-height  : 100vh;
    overflow-y  : scroll;
    overflow-x  : hidden;

    .header {
        display : flex;
        padding : 9px 30px;
        justify-content : space-evenly;

        .search {
            width   : 20vw;
        }
        .country {
            width   : 20vw;
        }
        .category {
            width   : 20vw;
        }
        .search-btn {
            background-color   : #1976d2;
            color               : #fff;
            text-transform  : none;
        }
    }

    .card-container {
        display             : flex;
        align-items         : center;
        flex-direction      : column;

        .card-wrapper {
            display     : flex;
            max-width   : 70vw;
            min-width   : 70vw;
            margin      : 20px;
            min-height  : 200px;

            .card-content {
                flex : 1;

                .title {
                    font-weight     : 700;
                    margin          : 0;
                    margin-bottom   : 7px;
                    font-size       : 20px;
                }

                .description {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    margin      : 0;
                    margin-bottom   : 7px;
                    font-size        : 18px;
                }
                .source {
                    margin          : 0;
                    margin-bottom   : 7px;
                    font-style      : italic;
                    font-size        : 12px;
                }
            }

            .card-media {
                max-width   : 300px;
                height      : 100%;
                max-height  : 200px;
            }
        }
    }
`