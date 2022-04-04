import React from 'react';

const Blogs = () => {
    return (

        <main className='container h-100 mt-5'>
            <div className='row h-100'>
                <div className='col-lg-6 h-100 my-auto'>
                    <h3>What is context API?</h3>
                    <p> ANS: Context API is hook of react . it is basically used for avoid props drilling. it is easier to transfer data to one component to other. it has a parent who is wrapped by provider.provider. And consumer has to  call  a hook with parameter called useContext. Then child can access the value .Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it.  </p>
                </div>
                <div className='col-lg-6'>
                    <h3>What is semantic tag?</h3>
                    <p>ANS: Semantic tag gives meaning about the content of  those tags that goes beyond just how they look on a page. Browser and a developer can understand the meaning about the content written into semantic tag. it also helps to improve SEO. google crawler can crawl easily a website which has semantic tag. Examples of non-semantic elements: div and span - Tells nothing about its content.

                        Examples of semantic elements: form, table, and article - Clearly defines its content.</p>
                </div>
            </div>
        </main>
    );
};

export default Blogs;