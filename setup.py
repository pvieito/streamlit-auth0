import setuptools

setuptools.setup(
    name="streamlit-auth0",
    version="1.0.0",
    author="",
    author_email="",
    description="",
    url="",
    packages=setuptools.find_packages(),
    include_package_data=True,
    python_requires=">=3.6",
    install_requires=[
        # By definition, a Custom Component depends on Streamlit.
        # If your component has other Python dependencies, list
        # them here.
        "streamlit>=0.63",
        "python-jose==3.3.0"
    ],
)
