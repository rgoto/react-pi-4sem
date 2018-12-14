import React, { useEffect } from "react";
import { Button, Col, Collapse, Form, Input, Row, Select } from "antd";
import "../css/ModalSearch.css";
import FormItem from "antd/lib/form/FormItem";
import { connect } from "react-redux";
import {
  fetchAndroidVersion,
  fetchCategories,
  fetchContentRating,
  fetchGenry,
  fetchType
} from "../ducks/Filters";
import {fetchSearch} from "../ducks/Search";

const sortBy = require("sort-by");

const ModalSearch = ({
  form,
  callFilters,
  filters,
  callCategory,
  callGenry,
  callType,
  callAndroidVersion,
  callContentRating,
  callSearch,
  search
}) => {
  const Search = Input.Search;
  const Option = Select.Option;
  const { getFieldDecorator } = form;
  const Panel = Collapse.Panel;

    useEffect(() => {
    callAndroidVersion();
    callCategory();
    callGenry();
    callType();
    callContentRating();
  }, []);

  const sortedCategory = filters.category
    ? filters.category.sort(sortBy("name"))
    : [];
  const sortedType = filters.typeFilter
    ? filters.typeFilter.sort(sortBy("name"))
    : [];
  const sortedGenry = filters.genry ? filters.genry.sort(sortBy("name")) : [];
  const sortedAndroidVersion = filters.androidVersion
    ? filters.androidVersion.sort(sortBy("name"))
    : [];
  const sortedContentRating = filters.contentRating
    ? filters.contentRating.sort(sortBy("name"))
    : [];

  let isOpen = "1";


  const onSubmitHandler = event => {
    event.preventDefault();

    if (isOpen === "1") {
      isOpen = "0";
    } else {
      isOpen = "1";
    }

    form.validateFields((error, valuesFormBody) => {
      if (!error) {
        callSearch(valuesFormBody);
      }
    });
  };


  return (
    <Form layout="inline" onSubmit={onSubmitHandler}>
      <div className="divModalSearch">
        <div className="push-back tst">
          <Row>
            <Col span={24}>
              <FormItem className="full-width">
                {getFieldDecorator("search", { initialValue: "" })(
                  <Search
                    placeholder="input search text"
                    enterButton={
                      <Button
                        icon="search"
                        htmlType="submit"
                        type="primary"
                        ghost
                        loading={search.loading.fetch}
                      />
                    }
                    size="large"
                  />
                )}
              </FormItem>
            </Col>
          </Row>
        </div>
        <Collapse bordered={false} defaultActiveKey={[isOpen]}>
          <Panel key="1" header="Advanced Search">
            <Row gutter={16}>
              <FormItem>
                <Col span={8}>
                  {getFieldDecorator("categoryId", { initialValue: "" })(
                    <Select
                      showSearch={true}
                      optionFilterProp="children"
                      className="select-default"
                    >
                      <Option value="">CATEGORY</Option>
                      {sortedCategory.map(filter => (
                        <Option key={filter.id} value={filter.id}>
                          {filter.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Col>
              </FormItem>
              <FormItem>
                <Col span={8}>
                  {getFieldDecorator("contentRatingName", { initialValue: "" })(
                    <Select className="select-default"
                            showSearch={true}
                            optionFilterProp="children">
                      <Option value="">CONTENT RATING</Option>
                      {sortedContentRating.map((filter, key) => (
                        <Option key={key} value={filter.name}>
                          {filter.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Col>
              </FormItem>
              <FormItem>
                <Col span={8}>
                  {getFieldDecorator("typeId", { initialValue: "" })(
                    <Select className="select-default">
                      <Option value="">TYPE</Option>
                      {sortedType.map(filter => (
                        <Option key={filter.id} value={filter.id}>
                          {filter.name}
                        </Option>
                      ))}
                    </Select>
                  )}
                </Col>
              </FormItem>
            </Row>
            <div className="push-back">
              <Row gutter={16}>
                <FormItem>
                  <Col span={12}>
                    {getFieldDecorator("genryId", { initialValue: "" })(
                      <Select className="select-default"
                              showSearch={true}
                              optionFilterProp="children">
                        <Option value="">GENRY</Option>
                        {sortedGenry.map(filter => (
                          <Option key={filter.id} value={filter.id}>
                            {filter.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Col>
                </FormItem>
                <FormItem>
                  <Col span={12}>
                    {getFieldDecorator("androidVersionId", { initialValue: "" })(
                      <Select className="select-default"
                              showSearch={true}
                              optionFilterProp="children">
                        <Option value="">ANDROID VERSION</Option>
                        {sortedAndroidVersion.map(filter => (
                          <Option key={filter.id} value={filter.id}>
                            {filter.name}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Col>
                </FormItem>
              </Row>
            </div>
            <div>
              <Button htmlType="submit" type="primary" loading={search.loading.fetch}>
                Search
              </Button>
            </div>
          </Panel>
        </Collapse>
      </div>
    </Form>
  );
};

export default connect(
  ({ filters, search }) => ({ filters, search}),
  dispatch => ({
    callCategory() {
      dispatch(fetchCategories());
    },
    callGenry() {
      dispatch(fetchGenry());
    },
    callType() {
      dispatch(fetchType());
    },
    callAndroidVersion() {
      dispatch(fetchAndroidVersion());
    },
    callContentRating() {
      dispatch(fetchContentRating());
    },
    callSearch(searchForm) {
      dispatch(fetchSearch(searchForm));
    }
  })
)(Form.create()(ModalSearch));
